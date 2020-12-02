import React from 'react';
import { Typography } from '@material-ui/core';
import { useBasket } from 'components/basket';
import styled from 'styled-components';

import CartItemsTable from './CartItemsTable';
import FooterButtons from './footer-buttons';

const Container = styled.div``;

const StrongText = styled(Typography)`
  font-weight: 800;
`;

export default function Review({ onPrevious, onNext, checkoutState }) {
  const basket = useBasket();

  const { house, street, city, phone, checkoutType } = checkoutState;

  return (
    <Container>
      <Typography variant="h1">Review</Typography>
      <CartItemsTable basket={basket} checkoutType={checkoutType} />
      {checkoutState.checkoutType === 'delivery' && (
        <>
          <StrongText variant="h4">Delivery</StrongText>
          <Typography variant="body1">{`${house} ${street} ${city}`}</Typography>
          <Typography variant="body1">{phone}</Typography>
        </>
      )}
      {checkoutState.checkoutType === 'collection' && (
        <>
          <StrongText variant="h4">Collection</StrongText>
          <Typography variant="body1">From store</Typography>
        </>
      )}
      <FooterButtons onPrevious={onPrevious} onNext={onNext} />
    </Container>
  );
}
