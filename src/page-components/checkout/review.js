import React from 'react';
import { Typography } from '@material-ui/core';
import { useBasket } from 'components/basket';
import styled from 'styled-components';

import CartItemsTable from './CartItemsTable';
import FooterButtons from './footer-buttons';
import { useRouter } from 'next/router';
import { doPost } from 'lib/rest-api/helpers';
import generateOrderModel from 'lib-api/util/generateOrderModel';
import { useLocale } from 'lib/app-config';
import Loader from 'components/Loader';

const Container = styled.div`
  padding-top: 34px;
`;

const CheckoutTypeContainer = styled.div`
  width: 340px;
  margin: 20px 0 34px;
  padding: 0 8px;
`;

const StrongText = styled(Typography)`
  font-weight: 800;
  padding-bottom: 16px;
`;

const DeliveryNoteContainer = styled.div`
  margin: 20px 0 0;
`;

async function persistCollectionOrder({ orderModel }) {
  console.log(
    `${window.location.origin}/api/order/collection-order`,
    orderModel
  );
  const { data } = await doPost(
    `${window.location.origin}/api/order/collection-order`,
    {
      body: JSON.stringify({
        orderModel
      })
    }
  );

  return data.orders.create.id;
}

export default function Review({ onPrevious, onNext, checkoutState }) {
  const locale = useLocale();

  const router = useRouter();

  const basket = useBasket();

  const [loading, setLoading] = React.useState(false);

  const hasStripe = !!process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID;

  const {
    house,
    street,
    city,
    phone,
    checkoutType,
    deliveryNote
  } = checkoutState;

  async function handleNext() {
    if (hasStripe) {
      return onNext();
    }

    setLoading(true);
    // Handle locale with sub-path routing
    let multilingualUrlPrefix = '';
    if (window.location.pathname.startsWith(`/${router.locale}/`)) {
      multilingualUrlPrefix = router.locale;
    }

    const { cart, metadata } = basket;

    const orderModel = generateOrderModel(
      multilingualUrlPrefix,
      checkoutState,
      locale,
      cart,
      metadata
    );

    try {
      const orderId = await persistCollectionOrder({ orderModel });

      if (orderId && multilingualUrlPrefix) {
        router.push(
          '/[locale]/confirmation/order/[orderId]',
          `/${multilingualUrlPrefix}/confirmation/order/${orderId}`
        );
      } else {
        router.push(
          '/confirmation/order/[orderId]',
          `/confirmation/order/${orderId}`
        );
      }
      scrollTo(0, 0);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  //console.log(basket);
  return (
    <Container>
      {loading && <Loader message="Placing order..." />}
      <CartItemsTable basket={basket} checkoutType={checkoutType} />
      {checkoutState.checkoutType === 'delivery' && (
        <CheckoutTypeContainer>
          <StrongText variant="h4">Delivery</StrongText>
          <Typography variant="body1">{`${house} ${street} ${city}`}</Typography>
          <Typography variant="body1">{phone}</Typography>
          {deliveryNote && (
            <DeliveryNoteContainer>
              <StrongText variant="h4">Delivery note</StrongText>
              <Typography variant="body1">{deliveryNote}</Typography>
            </DeliveryNoteContainer>
          )}
        </CheckoutTypeContainer>
      )}
      {checkoutState.checkoutType === 'collection' && (
        <CheckoutTypeContainer>
          <StrongText variant="h4">Collection</StrongText>
          <Typography variant="body1">From store</Typography>
        </CheckoutTypeContainer>
      )}
      <FooterButtons
        onPrevious={onPrevious}
        nextText={!hasStripe ? 'Place order' : undefined}
        onNext={handleNext}
      />
    </Container>
  );
}
