import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from '@material-ui/core';
import styled from 'styled-components';

import { CollectionDetails } from './collection-details';
import { DeliveryDetails } from './delivery-details';
import { useBasket } from 'components/basket';

const RadioGroupContainer = styled(FormControl)`
  margin-top: 20px !important;
  width: 100%;

  label {
    justify-content: space-between;
    padding-left: 16px;
    margin-left: 0;

    min-width: 340px;
    max-width: 340px;
    background: white;
    margin-bottom: 1px;
    box-shadow: 0 1px 1px rgba(192, 169, 168, 0.25);
  }
`;

export default function Order({ onNext, checkoutState }) {
  const [value, setValue] = useState(checkoutState.checkoutType || '');

  const basket = useBasket();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleNext(state) {
    basket.actions.setMetadata({ additionalInformation: value });
    onNext({ ...state, checkoutType: value });
  }

  return (
    <div>
      <Typography variant="h3">Collect or Deliver</Typography>
      <Typography variant="body1">
        How do you want to get your order?
      </Typography>

      <RadioGroupContainer component="fieldset">
        <RadioGroup
          aria-label="delivery method"
          name="deliveryMethod"
          value={value}
          onChange={handleChange}
        >
          {process.env.NEXT_PUBLIC_ORDER_COLLECTION && (
            <FormControlLabel
              labelPlacement="start"
              value="collection"
              control={<Radio />}
              label="I’ll collect it"
            />
          )}

          {process.env.NEXT_PUBLIC_ORDER_DELIVERY && (
            <FormControlLabel
              labelPlacement="start"
              value="delivery"
              control={<Radio />}
              label="Deliver it to me"
            />
          )}
        </RadioGroup>
      </RadioGroupContainer>

      {value === 'collection' && (
        <CollectionDetails
          onNext={(state) => handleNext(state)}
          checkoutState={checkoutState}
        />
      )}

      {value === 'delivery' && (
        <DeliveryDetails
          onNext={(state) => handleNext(state)}
          checkoutState={checkoutState}
        />
      )}
    </div>
  );
}
