import React, { useState } from 'react';

import { useBasket } from 'components/basket';
import Layout from 'components/layout';
import { useT } from 'lib/i18n';

import { Outer, Inner, Container } from './styles';

import Order from './order';
import Payment from './payment';

function Checkout() {
  const basket = useBasket();
  const t = useT();

  const checkoutChildren = [Order, Payment];

  const [step, setStep] = useState(0);

  const CurrentChildren = checkoutChildren[step];

  if (basket.status !== 'ready') {
    return <Outer center>{t('basket.loading')}</Outer>;
  }

  const { cart } = basket;

  if (!cart?.length) {
    return <Outer center>{t('basket.empty', { context: 'inCheckout' })}</Outer>;
  }

  // return (
  //   <Outer>
  //     <Inner>
  //       <Container>
  //         <SectionHeader>{t('checkout.title')}</SectionHeader>
  //         <Payment />
  //       </Container>
  //       <Container>
  //         <SectionHeader>{t('basket.title')}</SectionHeader>
  //         <OrderItems cart={cart} />
  //         <div style={{ padding: '0 15px' }}>
  //           <Totals />
  //         </div>
  //       </Container>
  //     </Inner>
  //   </Outer>
  // );

  function handlePrevious() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < checkoutChildren.length - 1) {
      setStep(step + 1);
    }
  }

  return (
    <Outer>
      <Inner>
        <Container>
          <CurrentChildren onPrevious={handlePrevious} onNext={handleNext} />
          <div style={{ margin: '28px 0', textAlign: 'center', maxWidth: 345 }}>
            <a
              href="#"
              onClick={() => alert('implement, clean basket redirect')}
            >
              Cancel order and return to Menu
            </a>
          </div>
        </Container>
      </Inner>
    </Outer>
  );
}

export default function CheckoutWithLayout(props) {
  const t = useT();

  return (
    <Layout title={t('checkout.title')} simple>
      <Checkout {...props} />
    </Layout>
  );
}
