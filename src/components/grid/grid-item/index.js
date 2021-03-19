import React from 'react';
import Link from 'next/link';
import DocumentItem from 'components/item-microformat/document-item';
import DocumentBlogRelatedItem from 'components/item-microformat/document-blog-related-item';
import { screen } from 'ui';
import { useLocale } from 'lib/app-config';
import PrimaryButton from '../../custom-fields/primary-button';

import {
  Outer,
  Header,
  Text,
  ImageWrapper,
  Img,
  Price,
  Title,
  Extra,
  Paragraphs
} from './styles';

const TENANT = process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER;
const isBlog = TENANT === 'loql-blog';

function getImageSize({ variants } = {}) {
  if (variants) {
    const biggestImage = variants.sort((a, b) => b.width - a.width)[0];
    const { width, height } = biggestImage;

    return {
      width,
      height
    };
  }

  return {};
}

export const truncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str?.length > length) {
    return str?.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export default function GridItem({ data, gridCell, extra }) {
  const locale = useLocale();

  if (!data) {
    return null;
  }

  const { name, path, type, variants, defaultVariant = {} } = data;
  const imageMdWidth = 100 / (gridCell?.layout?.colspan ?? 1);
  const cellSize = `cell-${gridCell?.layout?.rowspan}x${gridCell?.layout?.colspan}`;

  const singleParagraph = data.components.find((i) => i.name === 'Description')
    ?.content?.paragraphs?.[0]?.body?.json?.[0]?.children?.[0]?.textContent;

  let image;
  let text;

  if (type === 'folder' || type === 'document') {
    const images = data.components?.find((c) => c.type === 'images');
    image = images?.content?.images?.[0];
    text = <Title>{name}</Title>;
  } else {
    const variant = variants
      ? variants.find((variant) => variant.isDefault)
      : defaultVariant;
    const { priceVariants, image: i } = variant;

    const { price } =
      priceVariants?.find(
        (pv) => pv.identifier === locale.crystallizePriceVariant
      ) || {};

    image = i;
    text = (
      <Header>
        <Title>{name}</Title>
        <Price>{`£${Number(price).toFixed(2)}`}</Price>
      </Header>
    );
  }

  if (type === 'document') {
    return isBlog ? (
      <DocumentBlogRelatedItem data={data} colSpan="1" />
    ) : (
      <DocumentItem data={data} colSpan="1" />
    );
  }

  if (extra) {
    return (
      <Link href={path}>
        <Extra>
          <Outer className={cellSize} type={type}>
            <Text>{text}</Text>
            <ImageWrapper>
              {image && (
                <Img
                  {...image}
                  {...getImageSize(image)}
                  alt={name}
                  sizes={`(min-width ${screen.md}px) ${imageMdWidth}vw, 60vw`}
                />
              )}
            </ImageWrapper>
            <Paragraphs>{truncate(singleParagraph, 150, '...')}</Paragraphs>
            <PrimaryButton text="Buy now" />
          </Outer>
        </Extra>
      </Link>
    );
  } else {
    return (
      <Link href={path} passHref>
        <Outer className={cellSize} type={type}>
          <Text>{text}</Text>
          <ImageWrapper>
            {image && (
              <Img
                {...image}
                {...getImageSize(image)}
                alt={name}
                sizes={`(min-width ${screen.md}px) ${imageMdWidth}vw, 60vw`}
              />
            )}
          </ImageWrapper>
        </Outer>
      </Link>
    );
  }
}
