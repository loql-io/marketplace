import React, { useState } from 'react';
//import Img from '@crystallize/react-image';
import ContentTransformer from 'ui/content-transformer';
//import { useT } from 'lib/i18n';
import { simplyFetchFromGraph } from 'lib/graph';
//import { screen } from 'ui';
import Layout from 'components/layout';
import ShapeComponents from 'components/shape/components';
import VariantSelector from './variant-selector';
import Buy from './buy';
import query from './query';
import 'react-image-gallery/styles/css/image-gallery.css';

import ImageGallery from 'react-image-gallery';

import {
  Outer,
  Sections,
  Media,
  MediaInner,
  Name,
  Info,
  Summary,
  Content,
  Specs,
  Description,
  VariantSelectorOuter,
  ProductPrice
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

export default function ProductPage({ product, preview }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.isDefault)
  );

  const [price, setPrice] = useState(
    selectedVariant.priceVariants.find((c) => c.identifier === 'default').price
  );

  function onVariantChange(variant) {
    setSelectedVariant(variant);
    setPrice(
      variant.priceVariants.find((c) => c.identifier === 'default').price
    );
  }

  const summaryComponent = product.components?.find(
    (c) => c.name === 'Summary'
  );
  const descriptionComponent = product.components?.find(
    (c) => c.name === 'Description'
  );
  const specs = product.components?.find((c) => c.name === 'Specs');
  const componentsRest = product.components?.filter(
    (c) => !['Summary', 'Description', 'Specs'].includes(c.name)
  );

  const images = [];

  if (selectedVariant?.images) {
    Object.values(selectedVariant?.images).forEach((value) => {
      images.push({
        original: value.url,
        thumbnail: value.variants[0].url
      });
    });
  }

  return (
    <Layout title={product.name} preview={preview}>
      <Outer>
        <Sections>
          <Media>
            <MediaInner>
              <ImageGallery
                items={images}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={images.length > 1}
              />
            </MediaInner>
          </Media>
          <Info>
            <Name>{product.name}</Name>
            <ProductPrice>{`£${Number(price).toFixed(2)}`}</ProductPrice>
            <Content>
              {descriptionComponent && (
                <Description>
                  <ShapeComponents
                    className="description"
                    components={[descriptionComponent]}
                  />
                </Description>
              )}
              {specs && (
                <Specs>
                  <ShapeComponents components={[specs]} />
                </Specs>
              )}
            </Content>
            {summaryComponent && (
              <Summary>
                <ContentTransformer {...summaryComponent?.content?.json} />
              </Summary>
            )}

            {product.variants?.length > 1 ? (
              <VariantSelectorOuter>
                <VariantSelector
                  variants={product.variants}
                  selectedVariant={selectedVariant}
                  onVariantChange={onVariantChange}
                />
                <Buy product={product} selectedVariant={selectedVariant} />
              </VariantSelectorOuter>
            ) : (
              <Buy product={product} selectedVariant={selectedVariant} />
            )}
          </Info>
        </Sections>

        {<ShapeComponents components={componentsRest} pageType="product" />}
      </Outer>
    </Layout>
  );
}
