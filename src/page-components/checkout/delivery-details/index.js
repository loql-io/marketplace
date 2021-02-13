import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import CustomTextInputField from 'components/custom-fields/custom-text-input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FooterButtons from '../footer-buttons';
import PostCodeForm from 'components/postcode-form';
import { doGet } from 'lib/rest-api/helpers';

const deliveryRadius = process.env.NEXT_PUBLIC_DELIVERY_RADIUS;
const postcode_from = process.env.NEXT_PUBLIC_SHOP_POSTCODE;
const postcodeRegx = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

const DetailsContainer = styled.div`
  h3 {
    padding: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 345px;
  }

  .checkbox-label {
    background: white;
    padding: 27px 0 27px 20px;
    box-shadow: 0 1px 1px rgba(192, 169, 168, 0.25);
  }
`;

const getAddressDistance = async (value) => {
  const outsideRadius = await doGet(
    `${window.location.origin}/api/postcode-distance/${value}?postcode_from=${postcode_from}`
  )
    .then((data) => {
      if (data.metres * 0.000621 > parseFloat(deliveryRadius)) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return outsideRadius;
};

export function DeliveryDetails({ onNext, checkoutState }) {
  const [outsideRadiusText, setOutsideRadiusText] = useState(false);

  function handleSubmit(values) {
    onNext(values);
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required.'),
    lastName: Yup.string().required('Surname is required.'),
    email: Yup.string().email().required(),
    phone: Yup.string()
      .required('Mobile number is required.')
      .matches(/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/, {
        message: 'Mobile number is not valid.'
      }),
    postcode: Yup.string()
      .required('A valid postcode is required')
      .matches(postcodeRegx, { message: 'Postcode is not valid.' })
      .test(
        'delivery-radius',
        'Postcode is outside our delivery area.',
        async (value) => {
          if (
            postcodeRegx.test(value) &&
            Number(deliveryRadius) > 0 &&
            postcode_from
          ) {
            const isOutsideRadius = await getAddressDistance(value);
            setOutsideRadiusText(isOutsideRadius);
            return !isOutsideRadius;
          } else {
            return true;
          }
        }
      ),
    house: Yup.string().required(),
    street: Yup.string().required(),
    city: Yup.string().required()
  });

  return (
    <DetailsContainer>
      <Typography variant="h3">Delivery details</Typography>
      <Formik
        initialValues={{
          firstName: checkoutState.firstName,
          lastName: checkoutState.lastName,
          email: checkoutState.email,
          phone: checkoutState.phone,
          postcode: checkoutState.postcode,
          house: checkoutState.house,
          street: checkoutState.street,
          city: checkoutState.city,
          businessNews: checkoutState.businessNews || false,
          loqlNews: checkoutState.loqlNews || false
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <CustomTextInputField
              label="First name"
              value={formik.values.firstName}
              onChange={formik.handleChange('firstName')}
              helperText={
                formik.touched.firstName ? formik.errors.firstName : ''
              }
              error={formik.touched.firstName && !!formik.errors.firstName}
            />
            <CustomTextInputField
              label="Surname"
              value={formik.values.lastName}
              onChange={formik.handleChange('lastName')}
              helperText={formik.touched.lastName ? formik.errors.lastName : ''}
              error={formik.touched.lastName && !!formik.errors.lastName}
            />
            <CustomTextInputField
              value={formik.values.email}
              label="Your email"
              onChange={formik.handleChange('email')}
              helperText={formik.touched.email ? formik.errors.email : ''}
              error={formik.touched.email && !!formik.errors.email}
            />
            <CustomTextInputField
              label="Mobile number"
              value={formik.values.phone}
              onChange={formik.handleChange('phone')}
              helperText={formik.touched.phone ? formik.errors.phone : ''}
              error={formik.touched.phone && !!formik.errors.phone}
            />
            <PostCodeForm
              formik={formik}
              checkoutState={checkoutState}
              outsideRadiusText={outsideRadiusText}
            />

            {/* <FormControlLabel
              className="checkbox-label"
              labelPlacement="start"
              name="businessNews"
              value={formik.values.businessNews}
              onChange={handleChange('businessNews')}
              control={<CustomCheckbox checked={formik.values.businessNews} />}
              label="Tick this box if you do want to receive emails from the business you order with."
              style={{ margin: '0 0' }}
            />
            <FormControlLabel
              className="checkbox-label"
              labelPlacement="start"
              value="loqlNews"
              onChange={handleChange('loqlNews')}
              control={<CustomCheckbox checked={formik.values.loqlNews} />}
              label="Tick this box if you do want to receive emails from Loql."
              style={{ margin: '1px 0' }}
            /> */}
            <FooterButtons onNext={formik.submitForm} />
          </Form>
        )}
      </Formik>
    </DetailsContainer>
  );
}
