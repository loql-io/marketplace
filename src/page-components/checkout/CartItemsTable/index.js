import { Typography } from '@material-ui/core';
//import { useT } from 'lib/i18n';
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 375px;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px;

  background: white;

  strong {
    font-weight: 700;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

const ItemName = styled(Typography)`
  max-width: 180px;
`;

export default function CartItemsTable({ basket, checkoutType }) {
  //const t = useT();

  const { cart } = basket;

  return (
    <Container>
      {cart.map((item) => (
        <Row key={item.sku}>
          <ItemName variant="body1" component="strong">
            {item.name}
            {item.attributes.map(({ attribute, value }) => (
              <React.Fragment key={attribute}>
                &nbsp;{attribute}&nbsp;{value}
              </React.Fragment>
            ))}
            {item.quantity > 1 && <span>{` x${item.quantity}`}</span>}
          </ItemName>
          <Typography variant="body1">
            {/*t('common.price', {
              value: (item.price?.gross ?? 0) * item.quantity,
              currency: item.price?.currency
            })*/}
            {`£${((item.price?.gross ?? 0) * item.quantity).toFixed(2)}`}
          </Typography>
        </Row>
      ))}
      <Row>
        <Typography variant="body1">Subtotal</Typography>
        <Typography variant="body1">
          {/*t('common.price', {
            value: basket.total.gross,
            currency: basket.total.currency
          })*/}
          {`£${basket.total.gross.toFixed(2)}`}
        </Typography>
      </Row>
      {checkoutType === 'delivery' && (
        <Row>
          <Typography variant="body1">Delivery</Typography>
          <Typography variant="body1">Free</Typography>
        </Row>
      )}
      <Row>
        <Typography component="strong" variant="h5">
          Total
        </Typography>
        <Typography component="strong" variant="h5">
          {/*t('common.price', {
            value: basket.total.gross,
            currency: basket.total.currency
          })*/}
          {`£${basket.total.gross.toFixed(2)}`}
        </Typography>
      </Row>
    </Container>
  );
}
