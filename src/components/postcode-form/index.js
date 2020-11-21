/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { MenuItem, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import CustomTextInputField from 'components/custom-fields/custom-text-input';
import { Spinner } from 'ui';

const LOQL_API =
  'https://2g39n9ty3b.execute-api.us-east-1.amazonaws.com/staging';

const PostCodeForm = ({ formik }) => {
  const [loader, setLoader] = useState(false);

  const [addresses, setAddresses] = useState([]);

  const [searched, setSearched] = useState(true);

  const [manualInputText, setManualInputText] = useState(
    'Or enter it yourself'
  );

  const formattedPostcode = (p) => {
    p = p.match(/^([A-Z]{1,2}[\dA-Z]{1,2})[ ]?(\d[A-Z]{2})$/i);
    p.shift();
    return p.join(' ').toUpperCase();
  };

  const handleSetFieldValue = async (fieldName, value) => {
    await formik.setFieldValue(fieldName, value);

    formik.setFieldTouched(fieldName, true);
  };

  const getAddress = (event) => {
    event.preventDefault();

    setLoader(true);

    setSearched(true);

    handleSetFieldValue('house', '');
    handleSetFieldValue('street', '');
    handleSetFieldValue('city', '');

    axios
      .get(`${LOQL_API}/postcode/${formik.values.postcode}`)
      .then(({ data }) => {
        setLoader(false);
        if (data) {
          setAddresses(data.addresses);
          handleSetFieldValue('selectedAddress', '');
          handleSetFieldValue('postcode', data.postcode);
        }
      })
      .catch(() => {
        setLoader(false);
        setManualInputText('None found, please enter it below');
        setAddresses([]);
        handleSetFieldValue(
          'postcode',
          formattedPostcode(formik.values.postcode)
        );
      });
  };

  const handleSelectAddress = (event) => {
    const index = event.target.value;
    const selected = addresses[index];
    handleSetFieldValue('house', selected.building_number);
    handleSetFieldValue('street', selected.thoroughfare);
    handleSetFieldValue('city', selected.town_or_city);
  };

  return (
    <>
      <CustomTextInputField
        style={{ marginBottom: 8 }}
        onChange={formik.handleChange('postcode')}
        helperText={formik.touched.postcode ? formik.errors.postcode : ''}
        error={formik.touched.postcode && !!formik.errors.postcode}
        label="Postcode"
      />

      <Button
        type="button"
        variant="contained"
        text="Search"
        style={{ margin: '20px 0' }}
        onClick={getAddress}
        disabled={Boolean(formik.errors.postcode)}
      >
        Search
      </Button>
      {loader ? (
        <Spinner message="Searching addresses..." inline />
      ) : (
        <>
          {addresses.length > 0 && (
            <>
              <CustomTextInputField
                name="selectedAddress"
                label="Select address"
                select
                onChange={(event) => {
                  handleSelectAddress(event);
                  formik.handleChange(event);
                }}
                helperText={
                  formik.touched.selectedAddress
                    ? formik.errors.selectedAddress
                    : ''
                }
                error={
                  formik.touched.selectedAddress &&
                  !!formik.errors.selectedAddress
                }
                defaultValue={formik.values.selectedAddress}
                value={formik.values.selectedAddress}
              >
                <MenuItem value="" disabled>
                  {`${addresses.length} found`}
                </MenuItem>
                {addresses.map((address, i) => (
                  <MenuItem value={i} key={`${address.line_1}${i}`}>
                    {`${address.line_1}, ${address.town_or_city}`}
                  </MenuItem>
                ))}
              </CustomTextInputField>
            </>
          )}

          {searched && (
            <>
              <Typography
                style={{ alignSelf: 'flex-start', margin: '20px 10px' }}
                component="h4"
                variant="h4"
              >
                {manualInputText}
              </Typography>
              <CustomTextInputField
                style={{ marginTop: 10 }}
                id="house"
                value={formik.values.house}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.house ? formik.errors.house : ''}
                error={formik.touched.house && !!formik.errors.house}
                label="House or flat number/name"
                variant="outlined"
              />
              <CustomTextInputField
                id="street"
                value={formik.values.street}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.street ? formik.errors.street : ''}
                error={formik.touched.street && !!formik.errors.street}
                label="Street"
                variant="outlined"
              />
              <CustomTextInputField
                id="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.city ? formik.errors.city : ''}
                error={formik.touched.city && !!formik.errors.city}
                label="Town/City"
                variant="outlined"
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default PostCodeForm;
