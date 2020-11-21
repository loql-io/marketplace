import React from 'react';
import styled from 'styled-components';
import { FormControlLabel, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import CustomTextInputField from 'components/custom-fields/custom-text-input';
import FooterButtons from '../footer-buttons';
import CustomCheckbox from 'components/custom-fields/custom-checkbox';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    max-width: 345px;
    display: flex;
    flex-direction: column;
  }

  .checkbox-label {
    background: white;
    padding: 27px 0 27px 20px;
    box-shadow: 0 1px 1px rgba(192, 169, 168, 0.25);
  }
`;

export function CollectionDetails({ onNext }) {
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
      <Typography component="h3" variant="h3">
        Your Details
      </Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          businessNews: false,
          loqlNews: false
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, submitForm, ...formik }) => (
          <Form>
            <CustomTextInputField
              placeholder="Your first name"
              onChange={handleChange('firstName')}
              helperText={
                formik.touched.firstName ? formik.errors.firstName : ''
              }
              error={formik.touched.firstName && !!formik.errors.firstName}
            />
            <CustomTextInputField
              placeholder="Your surname"
              onChange={handleChange('lastName')}
              helperText={formik.touched.lastName ? formik.errors.lastName : ''}
              error={formik.touched.lastName && !!formik.errors.lastName}
            />
            <CustomTextInputField
              placeholder="Your mobile number"
              onChange={handleChange('phone')}
              helperText={formik.touched.phone ? formik.errors.phone : ''}
              error={formik.touched.phone && !!formik.errors.phone}
            />
            <FormControlLabel
              className="checkbox-label"
              labelPlacement="start"
              value="businessNews"
              control={<CustomCheckbox />}
              label="Tick this box if you do want to receive emails from the business you order with."
              style={{ margin: '0 0' }}
            />
            <FormControlLabel
              className="checkbox-label"
              labelPlacement="start"
              value="loqlNews"
              control={<CustomCheckbox />}
              label="Tick this box if you do want to receive emails from Loql."
              style={{ margin: '1px 0' }}
            />
            <FooterButtons onNext={submitForm} />
          </Form>
        )}
      </Formik>
    </DetailsContainer>
  );
}
