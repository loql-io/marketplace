import React, { useState, useEffect, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';

import { FormHelperText, Typography } from '@material-ui/core';
import { doPost } from 'lib/rest-api/helpers';

import styles from './styles';
import FooterButtons from '../footer-buttons';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const options = {
  style: {
    base: {
      fontSize: '18px',
      fontWeight: 'normal',
      fontFamily: 'Nunito Sans, sans-serif',
      '::placeholder': {
        fontFamily: 'Nunito Sans, sans-serif',
        color: '#2F2B27',
        fontWeigh: '300'
      }
    },
    invalid: {
      color: '#9e2146'
    }
  }
};

// Persist by create order in Crystallize
async function persistOrder({ paymentIntent, paymentModel }) {
  const { data } = await doPost(
    '/api/payment-providers/stripe/order-persistence',
    {
      body: JSON.stringify({
        paymentIntentId: paymentIntent.id,
        paymentModel
      })
    }
  );

  return data.orders.create.id;
}

function Form({ clientSecret, paymentModel, onSuccess, onPrevious }) {
  const stripe = useStripe();

  const elements = useElements();

  const [status, setStatus] = useState('idle');

  const classes = styles();

  const formRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    setStatus('confirming');

    go();

    async function go() {
      if (!stripe || !elements) {
        setTimeout(go, 100);
        return;
      }

      const { customer } = paymentModel;

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: `${customer.firstName} ${customer.lastName}`
            }
          }
        }
      );
      if (error) {
        setStatus({ error });
      } else {
        // The payment has been processed!
        if (paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
          const orderId = await persistOrder({
            paymentIntent,
            paymentModel
          });
          if (orderId) {
            onSuccess(orderId);
          }
        }
      }
    }
  }

  console.log(status);

  const checkError = (element) => {
    let helperID = 'card-error';

    switch (element) {
      case CardCvcElement: {
        helperID = 'cvc-error';
        break;
      }
      case CardElement: {
        helperID = 'card-error';
        break;
      }
      case CardExpiryElement: {
        helperID = 'expiry-error';
        break;
      }
      default:
        break;
    }

    elements.getElement(element).on('change', (event) => {
      const helper = document.getElementById(helperID);
      if (event.error) {
        helper.textContent = event.error.message;
        return;
      }
      helper.textContent = ' ';
    });
  };

  return (
    <div className={classes.formWrapper}>
      <Typography
        component="h1"
        variant="h1"
        align="center"
        className={classes.title}
      >
        Payment
      </Typography>

      <form ref={formRef} onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <fieldset>
            <CardNumberElement
              id="cardNumber"
              className={classes.inputs}
              options={options}
              onChange={() => checkError(CardNumberElement)}
            />
            <FormHelperText id="card-error" error />
          </fieldset>
        </div>
        <div className={classes.formGroup}>
          <fieldset>
            <CardExpiryElement
              id="cardExpiry"
              onChange={() => checkError(CardExpiryElement)}
              className={classes.inputs}
              options={options}
            />
            <FormHelperText id="expiry-error" error />
          </fieldset>
        </div>
        <div className={classes.formGroup}>
          <fieldset>
            <CardCvcElement
              id="cardCvc"
              className={classes.inputs}
              options={options}
              onChange={() => checkError(CardCvcElement)}
            />
            <FormHelperText id="cvc-error" error />
          </fieldset>
          <span className={classes.helpText}>
            Last 3 digits on the back of your card
          </span>
        </div>
        <FooterButtons
          onPrevious={onPrevious}
          onNext={() => formRef.current.submit()}
          nextText="Place order"
        />
      </form>
    </div>
  );
}

export default function StripeWrapper({ paymentModel, ...props }) {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    async function getClientSecret() {
      const { client_secret } = await doPost(
        '/api/payment-providers/stripe/create-payment-intent',
        {
          body: JSON.stringify({
            paymentModel
          })
        }
      );

      setClientSecret(client_secret);
    }

    getClientSecret();
  }, [paymentModel]);

  return (
    <Elements locale="en-GB" stripe={stripePromise}>
      <Form
        {...props}
        paymentModel={paymentModel}
        clientSecret={clientSecret}
      />
    </Elements>
  );
}
