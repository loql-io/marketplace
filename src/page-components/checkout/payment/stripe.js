import React, { useState, useEffect, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';

import CustomCheckbox from 'components/custom-fields/custom-checkbox';
import PostCodeForm from 'components/postcode-form';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import {
  FormHelperText,
  Typography,
  FormControlLabel
} from '@material-ui/core';

import { doPost } from 'lib/rest-api/helpers';

import styles from './styles';
import FooterButtons from '../footer-buttons';
import CustomTextInputField from 'components/custom-fields/custom-text-input';
import Loader from 'components/Loader';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  { stripeAccount: process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_ID }
);

const options = {
  style: {
    base: {
      fontSize: '16px',
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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required.'),
  lastName: Yup.string().required('Surname is required.'),
  postcode: Yup.string()
    .required('A valid postcode is required')
    .matches(
      /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
      { message: 'Postcode is not valid.' }
    ),
  house: Yup.string().required(),
  street: Yup.string().required(),
  city: Yup.string().required()
});

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

function Form({
  clientSecret,
  paymentModel,
  onSuccess,
  onPrevious,
  checkoutState
}) {
  const stripe = useStripe();

  const elements = useElements();

  const [isBillingSame, setIsBillingSame] = useState(true);

  const billingDetails = {
    type: 'billing',
    phone: checkoutState.phone,
    email: checkoutState.email
  };

  const [status, setStatus] = useState('idle');

  const classes = styles();

  const formRef = useRef();

  function formikSubmit(values) {
    return {
      ...billingDetails,
      firstName: values.firstName,
      lastName: values.lastName,
      postalCode: values.postcode,
      streetNumber: values.house,
      street: values.street,
      city: values.city
    };
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      postcode: '',
      house: '',
      street: '',
      city: ''
    },
    validateOnChange: true,
    onSubmit: (values) => formikSubmit(values)
  });

  async function handleSubmit(event) {
    event.preventDefault();

    let newBillingDetails = billingDetails;

    if (!isBillingSame) {
      newBillingDetails = await formik.submitForm();
    }

    if (!formik.isValid) return;

    setStatus('confirming');

    go();

    async function go() {
      if (!stripe || !elements) {
        setTimeout(go, 100);
        return;
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          receipt_email: checkoutState.email,
          payment_method: {
            card: elements.getElement(CardNumberElement),
            billing_details: {
              name: `${checkoutState.firstName} ${checkoutState.lastName}`,
              email: checkoutState.email
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
          let finalPaymentModel = { ...paymentModel };

          if (!isBillingSame) {
            finalPaymentModel.customer.addresses.push(newBillingDetails);
          }

          const orderId = await persistOrder({
            paymentIntent,
            paymentModel: finalPaymentModel
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
      case CardNumberElement: {
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
      {status === 'confirming' && <Loader message="Placing order" />}
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

        {checkoutState.checkoutType === 'delivery' && (
          <>
            <FormControlLabel
              className="checkbox-label"
              labelPlacement="start"
              value="billingDetails"
              onChange={() => setIsBillingSame(!isBillingSame)}
              control={<CustomCheckbox checked={isBillingSame} />}
              label="Billing details same as delivery"
              style={{
                margin: '1px 0',
                background: 'white',
                justifyContent: 'space-between',
                paddingLeft: 16
              }}
            />

            {!isBillingSame && <BillingDetails formik={formik} />}
          </>
        )}

        <FooterButtons
          onPrevious={onPrevious}
          onNext={handleSubmit}
          nextText="Place order"
        />
      </form>
    </div>
  );
}

function BillingDetails({ formik }) {
  return (
    <>
      <Typography variant="h3" style={{ margin: '20px 0' }}>
        Billing details
      </Typography>
      <CustomTextInputField
        value={formik.values.firstName}
        label="Your first name"
        onChange={formik.handleChange('firstName')}
        helperText={formik.touched.firstName ? formik.errors.firstName : ''}
        error={formik.touched.firstName && !!formik.errors.firstName}
      />
      <CustomTextInputField
        value={formik.values.lastName}
        label="Your surname"
        onChange={formik.handleChange('lastName')}
        helperText={formik.touched.lastName ? formik.errors.lastName : ''}
        error={formik.touched.lastName && !!formik.errors.lastName}
      />
      <PostCodeForm formik={formik} />
    </>
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
