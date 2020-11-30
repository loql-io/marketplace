import React, { useState } from 'react';

import { useBasket } from 'components/basket';
import Layout from 'components/layout';
import { useT } from 'lib/i18n';

import { Outer, Inner, Container, SectionHeader } from './styles';

import Order from './order';
import Payment from './payment';
import CheckoutProgress from './checkout-progress';
import OrderItems from 'components/order-items';
import { Totals } from 'components/basket/totals';
import { Button } from '@material-ui/core';
import Review from './review';
import { useRouter } from 'next/router';

function Checkout() {
  const basket = useBasket();

  const t = useT();

  const router = useRouter();

  const [checkoutState, setCheckoutState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    checkoutType: 'collection'
  });

  const newCheckout = true;

  const checkoutChildren = [Order, Review, Payment];

  const [step, setStep] = useState(0);

  const CurrentChildren = checkoutChildren[step];

  if (basket.status !== 'ready') {
    return <Outer center>{t('basket.loading')}</Outer>;
  }

  const { cart } = basket;

  if (!cart?.length) {
    return <Outer center>{t('basket.empty', { context: 'inCheckout' })}</Outer>;
  }

  function handlePrevious() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function handleNext(newState) {
    setCheckoutState({ ...checkoutState, ...newState });
    if (step < checkoutChildren.length - 1) {
      setStep(step + 1);
    }
  }

  function handleClearBasket() {
    router.replace('/');
    basket.actions.empty();
  }

  if (!newCheckout) {
    return (
      <Outer>
        <Inner>
          <Container>
            <SectionHeader>{t('checkout.title')}</SectionHeader>
            <Payment />
          </Container>
          <Container>
            <SectionHeader>{t('basket.title')}</SectionHeader>
            <OrderItems cart={cart} />
            <div style={{ padding: '0 15px' }}>
              <Totals />
            </div>
          </Container>
        </Inner>
      </Outer>
    );
  }

  return (
    <Outer>
      <Container>
        <img src="static/shopBadge.svg" alt="Shop logo" width="60" />
        <CheckoutProgress currentStep={step} />
        <CurrentChildren
          onPrevious={handlePrevious}
          onNext={handleNext}
          checkoutState={checkoutState}
        />
        <div style={{ margin: '28px 0', textAlign: 'center', maxWidth: 345 }}>
          <Button variant="text" onClick={handleClearBasket}>
            Cancel order and return to Menu
          </Button>
        </div>
      </Container>
    </Outer>
  );
}

export default function CheckoutWithLayout(props) {
  const t = useT();

  return (
    <Layout title={t('checkout.title')} hideHeader checkout={true}>
      <Checkout {...props} />
    </Layout>
  );
}
