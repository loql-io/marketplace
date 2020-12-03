import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import Layout from 'components/layout';
import { useBasket } from 'components/basket';
import { Outer } from 'ui';
import { useT } from 'lib/i18n';

import { Container } from './styles';
import CartItemsTable from './CartItemsTable';
import SecondaryButton from 'components/custom-fields/secondary-button';
import { useRouter } from 'next/router';

const StrongText = styled(Typography)`
  font-weight: 800 !important;
`;

const Title = styled(Typography)`
  padding-top: 28px;
`;

const OrderNumText = styled(Typography)`
  font-weight: 800;
  color: #816e68;
  padding: 20px 0;
`;

const Spacer = styled.div`
  margin: 20px 0;
`;

const CheckoutTypeContainer = styled.div`
  width: 340px;
  margin: 20px 0 34px;
  padding: 0 8px;
`;

export default function Confirmation({ order: orderData }) {
  const basket = useBasket();

  const router = useRouter();

  const [basketCopy, setBasketCopy] = useState(basket);

  const t = useT();

  const [emptied, setEmptied] = useState(false);

  useEffect(() => {
    setBasketCopy(basket);

    if (!emptied) {
      basket.actions.empty();
      setEmptied(true);
    }
  }, [emptied, basket]);

  const order = orderData.data.orders?.get;

  useEffect(() => {
    if (!order) {
      const t = setTimeout(() => window.location.reload(), 5000);

      return () => clearTimeout(t);
    }
  }, [order]);

  if (!order) {
    return <Layout loading />;
  }

  const { house, street, city, phone } = order.customer.addresses[0];

  const { additionalInformation: checkoutType } = basketCopy.metadata;

  function handleContinueShopping() {
    router.replace('/');
  }

  return (
    <Layout title={t('checkout.confirmation.title')} headless>
      <Outer>
        <Container>
          <img src="static/shopBadge.svg" alt="Shop logo" width="60" />
          <Title variant="h1">All done!</Title>
          <OrderNumText variant="h4">{`Order no. ${order.id.substring(
            0,
            4
          )}`}</OrderNumText>
          <Typography variant="body1">
            Your order has been received by
          </Typography>
          <StrongText variant="body1">
            {process.env.NEXT_PUBLIC_SHOP_NAME}
          </StrongText>
          <Spacer />
          <CartItemsTable basket={basketCopy} />
          {checkoutType === 'delivery' && (
            <CheckoutTypeContainer>
              <StrongText variant="h4">Delivery</StrongText>
              <Typography variant="body1">{`${house} ${street} ${city}`}</Typography>
              <Typography variant="body1">{phone}</Typography>
            </CheckoutTypeContainer>
          )}
          {checkoutType === 'collection' && (
            <CheckoutTypeContainer>
              <StrongText variant="h4">Collection</StrongText>
              <Typography variant="body1">From store</Typography>
            </CheckoutTypeContainer>
          )}

          <SecondaryButton
            text="Continue shopping"
            onClick={handleContinueShopping}
          />
        </Container>
      </Outer>
    </Layout>
  );
}
