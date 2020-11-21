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

  div + div {
    margin-top: 24px;
  }
`;

export function DeliveryDetails({ onNext }) {
  function handleSubmit() {
    onNext();
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required.'),
    lastName: Yup.string().required('Surname is required.'),
    phone: Yup.string()
      .required('Mobile number is required.')
      .matches(/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/, {
        message: 'Mobile number is not valid.'
      })
  });

  return (
    <DetailsContainer>
      <Typography variant="h3">Delivery details</Typography>
      <Formik
        initialValues={{ firstName: '', lastName: '', phone: '', postcode: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <CustomTextInputField
              label="First name"
              onChange={formik.handleChange('firstName')}
              helperText={
                formik.touched.firstName ? formik.errors.firstName : ''
              }
              error={formik.touched.firstName && !!formik.errors.firstName}
            />
            <CustomTextInputField
              label="Surname"
              onChange={formik.handleChange('lastName')}
              helperText={formik.touched.lastName ? formik.errors.lastName : ''}
              error={formik.touched.lastName && !!formik.errors.lastName}
            />
            <CustomTextInputField
              label="Mobile number"
              onChange={formik.handleChange('phone')}
              helperText={formik.touched.phone ? formik.errors.phone : ''}
              error={formik.touched.phone && !!formik.errors.phone}
            />
            <PostCodeForm formik={formik} />
            <FooterButtons onNext={formik.submitForm} />
          </Form>
        )}
      </Formik>
    </DetailsContainer>
  );
}
