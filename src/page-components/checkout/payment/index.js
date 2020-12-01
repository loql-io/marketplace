/* eslint-disable react/display-name */
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useLocale } from 'lib/app-config';
import { useBasket } from 'components/basket';
import StripeCheckout from './stripe';

export default function Payment({ checkoutState, onPrevious }) {
  const locale = useLocale();
  const router = useRouter();
  const { cart, metadata } = useBasket();

  // Handle locale with sub-path routing
  let multilingualUrlPrefix = '';
  if (window.location.pathname.startsWith(`/${router.locale}/`)) {
    multilingualUrlPrefix = router.locale;
  }

  const { firstName, lastName, email, phone } = checkoutState;

  // Define the shared payment model for all payment providers
  const paymentModel = {
    multilingualUrlPrefix,
    locale,
    cart,
    metadata,
    additionalInformation: checkoutState.checkoutType,
    customer: {
      firstName,
      lastName,
      identifier: email,
      addresses: [
        {
          type: 'delivery',
          email,
          phone,
          street: checkoutState?.street,
          postalCode: checkoutState?.postcode,
          streetNumber: checkoutState?.house,
          city: checkoutState?.city
        }
      ]
    }
  };

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
              '/[locale]/confirmation/stripe/[orderId]',
              `/${multilingualUrlPrefix}/confirmation/stripe/${orderId}`
            );
          } else {
            router.push(
              '/confirmation/stripe/[orderId]',
              `/confirmation/stripe/${orderId}`
            );
          }
          scrollTo(0, 0);
        }}
      />
    </div>
  );
}
