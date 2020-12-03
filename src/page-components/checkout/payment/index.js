/* eslint-disable react/display-name */
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useLocale } from 'lib/app-config';
import { useBasket } from 'components/basket';
import StripeCheckout from './stripe';
import generateOrderModel from 'lib-api/util/generateOrderModel';

export default function Payment({ checkoutState, onPrevious }) {
  const locale = useLocale();
  const router = useRouter();
  const { cart, metadata } = useBasket();

  // Handle locale with sub-path routing
  let multilingualUrlPrefix = '';
  if (window.location.pathname.startsWith(`/${router.locale}/`)) {
    multilingualUrlPrefix = router.locale;
  }

  const paymentModel = generateOrderModel(
    router,
    checkoutState,
    locale,
    cart,
    metadata
  );

  return (
    <div>
      <Head>
        <script key="stripe-js" src="https://js.stripe.com/v3/" />
      </Head>
      <StripeCheckout
        paymentModel={paymentModel}
        onPrevious={onPrevious}
        checkoutState={checkoutState}
        onSuccess={(orderId) => {
          if (multilingualUrlPrefix) {
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
        }}
      />
    </div>
  );
}
