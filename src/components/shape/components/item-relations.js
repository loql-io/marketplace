import { useT } from 'lib/i18n';

import { Related, H3, List, ListItem, ImageWrapper, Img } from './styles';

export default function ItemRelations({ items }) {
  const t = useT();

  if (!items) {
    return null;
  }

  const getPrice = (item) => {
    const price = item.price;
    const currency = item.currency;
    return `${t('common.price', { value: price, currency })}`;
  };

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
                {item?.variants?.[0].image?.url && (
                  <Img {...item?.variants?.[0].image} sizes="8vw" />
                )}
              </ImageWrapper>
              <h4>{item?.name}</h4>
              <span>{getPrice(item?.variants?.[0].priceVariants?.[0])}</span>
            </a>
          </ListItem>
        ))}
      </List>
    </Related>
  );
}
