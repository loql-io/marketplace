import React, { useEffect, useState } from 'react';

import AttributeList from 'components/attribute-list';
import { useT } from 'lib/i18n';

import {
  ControlPointRounded,
  RemoveCircleOutlineRounded
} from '@material-ui/icons';

import {
  Item,
  Row,
  ItemInfo,
  PriceWrapper,
  ItemImage,
  ItemName,
  ItemQuantityChanger,
  ItemQuantity,
  ItemDelete,
  PriceWrap,
  Price,
  PriceVat,
  drawAttentionDuration,
  IconButton
} from './styles';

export default function TinyBasketItem({ actions, item }) {
  const t = useT();
  const [drawAttention, setDrawAttention] = useState(false);

  const { id, attributes, addItemTime, images } = item;

  // Draw users attention when the item is added to the basket
  useEffect(() => {
    if (id) {
      setDrawAttention(true);

      let timeout = setTimeout(
        () => setDrawAttention(false),
        drawAttentionDuration
      );
      return () => clearTimeout(timeout);
    }
  }, [id, addItemTime]);

  function increment() {
    actions.incrementItem(item);
  }

  function decrement() {
    actions.decrementItem(item);
  }

  function remove() {
    actions.removeItem(item);
  }

  // Data is not fetched from the API yet
  if (!id) {
    return null;
  }

  return (
    <Item animate={drawAttention}>
      <ItemImage {...images?.[0]} />
      <ItemInfo>
        <Row>
          <ItemName>{item.name}</ItemName>
          {attributes?.length > 0 && <AttributeList attributes={attributes} />}
        </Row>

        <PriceWrapper>
          <PriceWrap>
            <Price>
              {t('common.price', {
                value: item.price?.gross ?? 0,
                currency: item.price?.currency
              })}
            </Price>
          </PriceWrap>

          <PriceVat>
            <span>
              {t('common.vat', {
                value: item.price?.vat ?? 0,
                currency: item.price?.currency
              })}
            </span>
          </PriceVat>
        </PriceWrapper>
        <div>
          <ItemQuantityChanger>
            <IconButton
              onClick={decrement}
              type="button"
              disabled={item.quantity === 1}
            >
              <RemoveCircleOutlineRounded />
            </IconButton>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <IconButton onClick={increment} type="button">
              <ControlPointRounded />
            </IconButton>
          </ItemQuantityChanger>
        </div>
      </ItemInfo>

      <ItemDelete onClick={remove}>{t('basket.removeItem', item)}</ItemDelete>
    </Item>
  );
}
