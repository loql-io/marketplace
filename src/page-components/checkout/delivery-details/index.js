import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import CustomTextInputField from 'components/custom-fields/custom-text-input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FooterButtons from '../footer-buttons';
import PostCodeForm from 'components/postcode-form';

const DetailsContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    max-width: 345px;
  }
`;

export function DeliveryDetails({ onNext, checkoutState }) {
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
      .matches(
        /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
        { message: 'Postcode is not valid.' }
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
          city: checkoutState.city
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
            <PostCodeForm formik={formik} checkoutState={checkoutState} />
            <FooterButtons onNext={formik.submitForm} />
          </Form>
        )}
      </Formik>
    </DetailsContainer>
  );
}
