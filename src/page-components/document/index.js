import React from 'react';
import ContentTransformer from 'ui/content-transformer';

import { Header, Outer } from 'ui';
import Layout from 'components/layout';
import { simplyFetchFromGraph } from 'lib/graph';
import GridRelations from 'components/shape/components/grid-relations';
import ParagraphCollection from 'components/shape/components/paragraph-collection';
import ParagraphCollectionAbout from 'components/shape/componentsLoql/paragraph-collection-about';
import { format, parseISO } from 'date-fns';
import StaticAbout from '../../static/about';

import Chip from '@material-ui/core/Chip';

import query from './query';
import {
  HeroImage,
  Img,
  H1,
  Date,
  Author,
  ArticleContainer,
  ArticleContainerAbout,
  ArticleIntro,
  Article,
  ArticleData,
  TopicsContainer
} from './styles';

const TENANT = process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER;
const isBlog = TENANT === 'loql-blog';
const isLoql = TENANT === 'loql';

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
  /* static about page only for loql blog */
  if (!document.components && isBlog && document.name === 'About') {
    return (
      <Layout title={`${document.name} Loql`}>
        <Outer>
          <Header centerContent>
            <StaticAbout />
          </Header>
        </Outer>
      </Layout>
    );
  }

  const title = document?.components?.find((c) => c.name === 'Title')?.content
    ?.text;
  const description = document?.components?.find((c) => c.name === 'Intro');
  const images = document?.components?.find((c) => c.name === 'Image');
  const date = document?.components?.find(
    (c) => c.name === 'Date' || c.name === 'Published'
  )?.content?.datetime;
  const author = document?.components?.find((c) => c.name === 'Author')?.content
    ?.text;

  if (isLoql && document.path === '/about') {
    return (
      <Layout title={title || document.name} preview={preview}>
        <Outer>
          <Header centerContent />
          <ArticleContainerAbout>
            <Article>
              {document?.components?.map(({ type, ...component }, index) => {
                if (type === 'paragraphCollection') {
                  let Component;

                  if (!component?.content?.paragraphs) {
                    return null;
                  }

                  Component = Component || ParagraphCollectionAbout;

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
          </ArticleContainerAbout>

          {document?.components?.map(({ type, ...component }, index) => {
            if (type === 'gridRelations') {
              let Component;
              Component = Component || GridRelations;
              return <Component key={index} grids={component.content.grids} />;
            }
          })}
        </Outer>
      </Layout>
    );
  } else if (isBlog) {
    const topics = document.topics?.filter((x) => x.name !== 'Blog');

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
          <H1>{document.name}</H1>

          <ArticleContainer>
            <ArticleIntro>
              <ArticleData style={{ padding: '36px 0px 0px' }}>
                <Author>{author}</Author>
                <Date>
                  {date ? format(parseISO(date), 'd MMMM yyyy') : null}
                </Date>
              </ArticleData>
              <ContentTransformer {...description?.content?.json} />
            </ArticleIntro>
            <Article>
              {document?.components?.map(({ type, ...component }, index) => {
                if (type === 'paragraphCollection') {
                  let Component;

                  if (!component?.content?.paragraphs) {
                    return null;
                  }

                  Component = Component || ParagraphCollection;

                  return (
                    <Component
                      key={index}
                      paragraphs={component?.content?.paragraphs}
                      name={component.name}
                    />
                  );
                }
              })}
              <TopicsContainer>
                {topics &&
                  Object.values(topics).map(({ name }, i) => (
                    <Chip
                      key={i}
                      label={name}
                      component="a"
                      href={`/topics/${name?.toLowerCase()}`}
                      clickable
                      variant="outlined"
                    />
                  ))}
              </TopicsContainer>
            </Article>
          </ArticleContainer>

          {document?.components?.map(({ type, ...component }, index) => {
            if (type === 'gridRelations') {
              let Component;
              Component = Component || GridRelations;
              return (
                <Component key={index} grids={component?.content?.grids} />
              );
            }
          })}
        </Outer>
      </Layout>
    );
  } else {
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
            <Date>{date ? format(parseISO(date), 'd MMMM yyyy') : null}</Date>
          </ArticleData>
          <ArticleContainer>
            <ArticleIntro>
              <ContentTransformer {...description?.content?.json} />
            </ArticleIntro>
            <Article>
              {document?.components?.map(({ type, ...component }, index) => {
                if (type === 'paragraphCollection') {
                  let Component;

                  if (!component?.content?.paragraphs) {
                    return null;
                  }

                  Component = Component || ParagraphCollection;

                  return (
                    <Component
                      key={index}
                      paragraphs={component?.content?.paragraphs}
                      name={component.name}
                    />
                  );
                }
              })}
            </Article>
          </ArticleContainer>

          {document?.components?.map(({ type, ...component }, index) => {
            if (type === 'gridRelations') {
              let Component;
              Component = Component || GridRelations;
              return (
                <Component key={index} grids={component?.content?.grids} />
              );
            }
          })}
        </Outer>
      </Layout>
    );
  }
}
