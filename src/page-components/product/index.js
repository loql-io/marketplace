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
  //console.log(data)
  return { ...data, preview };
}

export default function ProductPage({ product, preview }) {
  //const t = useT();
  // Set the selected variant to the default
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.isDefault)
  );

  const [price, setPrice] = useState(
    selectedVariant.priceVariants.find((c) => c.identifier === 'default').price
  );

  const [currency, setCurrency] = useState(
    selectedVariant.priceVariants.find((c) => c.identifier === 'default')
      .currency
  );

  console.log(currency);

  function onVariantChange(variant) {
    setSelectedVariant(variant);
    setPrice(
      variant.priceVariants.find((c) => c.identifier === 'default').price
    );
    setCurrency(
      variant.priceVariants.find((c) => c.identifier === 'default').currency
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

  Object.entries(selectedVariant?.images).forEach(([key, value]) => {
    images.push({
      original: value.url,
      thumbnail: value.variants[0].url,
      key: key
    });
  });

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
              />
            </MediaInner>
          </Media>
          <Info>
            <Name>{product.name}</Name>
            <ProductPrice>
              {/*t('common.price', {
                value: price,
                currency
              })*/}
              {`£${Number(price).toFixed(2)}`}
            </ProductPrice>
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

        {/*product?.topics?.length && <Topics topicMaps={product.topics} />*/}

        {<ShapeComponents components={componentsRest} pageType="product" />}
      </Outer>
    </Layout>
  );
}
