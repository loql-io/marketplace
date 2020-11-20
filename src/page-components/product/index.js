import React, { useState } from 'react';
import Img from '@crystallize/react-image';
import ContentTransformer from 'ui/content-transformer';

import { simplyFetchFromGraph } from 'lib/graph';
import { screen } from 'ui';
import Layout from 'components/layout';
import ShapeComponents from 'components/shape/components';
import Carousel from 'react-material-ui-carousel';

import VariantSelector from './variant-selector';
import Buy from './buy';
import query from './query';
//import Topics from 'components/topics';
import { useT } from 'lib/i18n';
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
  Related,
  H2,
  List,
  ListItem,
  ImageWrapper,
  VariantSelectorOuter
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

  function onVariantChange(variant) {
    setSelectedVariant(variant);
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

  const relatedProducts = product?.components?.find(
    (c) => c.type === 'itemRelations'
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

        {<ShapeComponents components={componentsRest} />}

        {relatedProducts?.content?.items?.length && (
          <Related>
            <H2>
              {t('product.relatedProduct', {
                count: relatedProducts?.content?.items?.length
              })}
            </H2>
            <List>
              {relatedProducts?.content?.items?.map((item) => (
                <ListItem key={item.id}>
                  {/*console.log(item?.variants?.[0])*/}
                  <a as={item?.path} href={item?.path}>
                    <h4>{item?.name}</h4>
                    <span>£{item?.variants?.[0].priceVariants[0].price}</span>
                    <ImageWrapper>
                      {item?.variants?.[0].image?.url && (
                        <Img {...item?.variants[0].image} sizes="8vw" />
                      )}
                    </ImageWrapper>
                  </a>
                </ListItem>
              ))}
            </List>
          </Related>
        )}
      </Outer>
    </Layout>
  );
}
