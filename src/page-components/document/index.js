import React from 'react';
import ContentTransformer from 'ui/content-transformer';

import { Header, Outer } from 'ui';
import Layout from 'components/layout';
import { simplyFetchFromGraph } from 'lib/graph';
import ShapeComponents from 'components/shape/components';
import ParagraphCollection from 'components/shape/components/paragraph-collection';
import { format, parseISO } from 'date-fns';

import query from './query';
import {
  HeroImage,
  Img,
  H1,
  Date,
  Author,
  ArticleContainer,
  ArticleIntro,
  Article,
  ArticleData
} from './styles';

export async function getData({ asPath, language, preview = null }) {
  const { data } = await simplyFetchFromGraph({
    query,
    variables: {
      path: asPath,
      language,
      version: preview ? 'draft' : 'published'
    }
  });
  return { ...data, preview };
}

export default function DocumentPage({ document, preview }) {
  const title = document?.components?.find((c) => c.name === 'Title')?.content
    ?.text;
  const description = document?.components?.find((c) => c.name === 'Intro');
  const images = document?.components?.find((c) => c.name === 'Image');
  const date = document?.components?.find((c) => c.name === 'Date')?.content
    ?.datetime;
  const author = document?.components?.find((c) => c.name === 'Author')?.content
    ?.text;
  const componentsRest = document?.components?.filter(
    (c) =>
      !['Intro', 'Title', 'Image', 'Author', 'Subtitle', 'Body'].includes(
        c.name
      )
  );
  return (
    <Layout title={title || document.name} preview={preview}>
      <Outer>
        <Header centerContent />
        <HeroImage>
          {images?.content?.images?.map((img, i) => (
            <Img
              key={img.url}
              {...img}
              alt={img.altText}
              sizes={i > 0 ? '40vw' : '80vw'}
            />
          ))}
        </HeroImage>
        <H1>{title}</H1>
        <ArticleData>
          <Author>{author}</Author>
          <Date>{format(parseISO(date), 'cccc do yyyy')}</Date>
        </ArticleData>
        <ArticleContainer>
          <ArticleIntro>
            <ContentTransformer {...description?.content?.json} />
          </ArticleIntro>
          <Article>
            {document?.components?.map(({ type, ...component }, index) => {
              if (type === 'paragraphCollection') {
                let Component;

                if (!component.content.paragraphs) {
                  return null;
                }

                Component = Component || ParagraphCollection;

                return (
                  <Component
                    key={index}
                    paragraphs={component.content.paragraphs}
                    name={component.name}
                  />
                );
              }
            })}
          </Article>
        </ArticleContainer>
        <ShapeComponents components={componentsRest} />
      </Outer>
    </Layout>
  );
}
