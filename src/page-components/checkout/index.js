import { Button } from '@material-ui/core';
import { useBasket } from 'components/basket';
import Layout from 'components/layout';
import { useT } from 'lib/i18n';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CheckoutProgress from './checkout-progress';
import Order from './order';
import Payment from './payment';
import Review from './review';
import { Container, Outer } from './styles';

function Checkout() {
  const basket = useBasket();

  const t = useT();

  const router = useRouter();

  const [checkoutState, setCheckoutState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    checkoutType: ''
  });

  const [checkoutChildren, setCheckoutChildren] = useState([Order, Review]);

  const [step, setStep] = useState(0);

  const [checkoutProgressSteps, setCheckoutProgressSteps] = useState([
    'Your order',
    'Review'
  ]);

  const CurrentChildren = checkoutChildren[step];

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID) {
      setCheckoutChildren((prevState) => [...prevState, Payment]);
      setCheckoutProgressSteps((prevState) => [...prevState, 'Payment']);
    }
  }, []);

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

  console.log(basket);

  return (
    <Outer>
      <Container>
        <img src="static/shopBadge.svg" alt="Shop logo" width="60" />
        <CheckoutProgress steps={checkoutProgressSteps} currentStep={step} />
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
    <Layout title={t('checkout.title')} hideHeader headless={true}>
      <Checkout {...props} />
    </Layout>
  );
}
