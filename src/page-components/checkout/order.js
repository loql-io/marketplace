import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from '@material-ui/core';
import { CollectionDetails } from './collection-details';
import { DeliveryDetails } from './delivery-details';
import { useBasket } from 'components/basket';

export default function Order({ onNext, checkoutState }) {
  const [value, setValue] = useState(checkoutState.checkoutType || '');
  const basket = useBasket();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleNext(state) {
    onNext({ ...state, checkoutType: value });
    basket.actions.setMetadata({ additionalInformation: value });
  }

  return (
    <div>
      <Typography variant="h3">Collect or Deliver</Typography>
      <Typography variant="body1">
        How do you want to get your order?
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="delivery method"
          name="deliveryMethod"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            labelPlacement="start"
            value="collection"
            control={<Radio />}
            label="I’ll collect it"
          />
          <FormControlLabel
            labelPlacement="start"
            value="delivery"
            control={<Radio />}
            label="Deliver it to me"
          />
        </RadioGroup>
      </FormControl>

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
