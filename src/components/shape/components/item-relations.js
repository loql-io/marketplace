import { useT } from 'lib/i18n';

import {
  Related,
  H3,
  List,
  ListItem,
  ImageWrapper,
  Img,
  RelatedPrice,
  H4
} from './styles';

export default function ItemRelations({ items }) {
  const t = useT();

  if (!items) {
    return null;
  }

  const getPrice = (item) => {
    const price = item?.price || 0;
    const currency = item?.currency || 'gbp';
    return `${t('common.price', { value: price, currency })}`;
  };
  // console.log('items', items[0])
  return (
    <Related>
      <H3>
        {t('product.relatedProduct', {
          count: items?.length
        })}
      </H3>
      <List>
        {items?.map((item) => (
          <ListItem key={item.id}>
            <a as={item?.path} href={item?.path}>
              <ImageWrapper>
                {item?.variants?.[0].image?.url ? (
                  <Img {...item?.variants?.[0].image} sizes="8vw" />
                ) : (
                  <Img
                    {...items?.[0].components.filter(
                      (c) => c.type === 'images'
                    )[0]?.content?.images[0]}
                    sizes="8vw"
                  />
                )}
              </ImageWrapper>
              <H4>{item?.name}</H4>
              {items[0].variants && (
                <RelatedPrice>
                  {getPrice(item?.variants?.[0].priceVariants?.[0])}
                </RelatedPrice>
              )}
            </a>
          </ListItem>
        ))}
      </List>
    </Related>
  );
}
