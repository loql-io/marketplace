/* eslint-disable react/display-name */
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styled from 'styled-components';

import { useLocale } from 'lib/app-config';
import { useBasket } from 'components/basket';

import { PaymentProviders, PaymentProvider } from '../styles';

const StripeCheckout = dynamic(() => import('./stripe'));

const Inner = styled.div``;

export default function Payment({ checkoutState, onPrevious }) {
  const locale = useLocale();
  const router = useRouter();
  const { cart, metadata } = useBasket();

  // Handle locale with sub-path routing
  let multilingualUrlPrefix = '';
  if (window.location.pathname.startsWith(`/${router.locale}/`)) {
    multilingualUrlPrefix = router.locale;
  }

  const { firstName, lastName, email } = checkoutState;

  // Define the shared payment model for all payment providers
  const paymentModel = {
    multilingualUrlPrefix,
    locale,
    cart,
    metadata,
    customer: {
      firstName,
      lastName,
      addresses: [
        {
          type: 'billing',
          email
        }
      ]
    }
  };

  const stripe = [
    {
      name: 'stripe',
      color: '#6773E6',
      logo: '/static/stripe-logo.png',
      render: () => (
        <PaymentProvider>
          <Head>
            <script key="stripe-js" src="https://js.stripe.com/v3/" async />
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
        </PaymentProvider>
      )
    }
  ];

  return (
    <Inner>
      <div>
        <PaymentProviders>{stripe[0].render()}</PaymentProviders>
      </div>
    </Inner>
  );
}
