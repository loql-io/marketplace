import React, { useState } from 'react';
import Img from '@crystallize/react-image';
import ContentTransformer from 'ui/content-transformer';
import { useT } from 'lib/i18n';
import { simplyFetchFromGraph } from 'lib/graph';
import { screen } from 'ui';
import Layout from 'components/layout';
import ShapeComponents from 'components/shape/components';
import Carousel from 'react-material-ui-carousel';

import VariantSelector from './variant-selector';
import Buy from './buy';
import query from './query';
//import Topics from 'components/topics';

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
  const t = useT();
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

  return (
    <Layout title={product.name} preview={preview}>
      <Outer>
        <Sections>
          <Media>
            <MediaInner>
              <Carousel autoPlay={false}>
                {selectedVariant?.images?.map((item, i) => (
                  <Img
                    key={i}
                    {...item}
                    sizes={`(max-width: ${screen.sm}px) 400px, 60vw`}
                    alt={product.name}
                  />
                ))}
              </Carousel>
            </MediaInner>
          </Media>
          <Info>
            <Name>{product.name}</Name>
            <ProductPrice>
              {t('common.price', {
                value: price,
                currency
              })}
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

            {product.variants?.length > 1 && (
              <VariantSelectorOuter>
                <VariantSelector
                  variants={product.variants}
                  selectedVariant={selectedVariant}
                  onVariantChange={onVariantChange}
                />
                <Buy product={product} selectedVariant={selectedVariant} />
              </VariantSelectorOuter>
            )}
          </Info>
        </Sections>

        {/*product?.topics?.length && <Topics topicMaps={product.topics} />*/}

        {<ShapeComponents components={componentsRest} pageType="product" />}
      </Outer>
    </Layout>
  );
}
