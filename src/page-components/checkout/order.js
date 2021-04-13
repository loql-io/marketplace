import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  Fade,
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
import Vouchers from './vouchers';

const RadioGroupContainer = styled(FormControl)`
  margin-top: 20px !important;
  width: 100%;

  .MuiRadio-colorSecondary.Mui-checked {
    color: #2f2b27;
  }

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

  const [code, setCode] = useState(null);

  const basket = useBasket();

  const router = useRouter();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCodeState = (code) => {
    setCode(code);
  };

  function handleNext(state, code) {
    basket.actions.setMetadata({
      additionalInformation: value,
      deliveryNote: state.deliveryNote,
      voucherCode: code
    });
    onNext({ ...state, checkoutType: value, code });
  }

  const showCollection = useMemo(
    () => (process.env.NEXT_PUBLIC_ORDER_COLLECTION === 'true' ? true : false),
    []
  );

  const showDelivery = useMemo(
    () => (process.env.NEXT_PUBLIC_ORDER_DELIVERY === 'true' ? true : false),
    []
  );

  if (!showCollection && !showDelivery) {
    window.alert(
      'You must enable collection (NEXT_PUBLIC_ORDER_COLLECTION=true) or delivery (NEXT_PUBLIC_ORDER_DELIVERY=true) in the .env file for checkout to work'
    );
  }

  const minimumOrder = Number(process.env.NEXT_PUBLIC_SHOP_MIN_ORDER || 0);
  const isAboveMinOrder =
    minimumOrder > 0 ? basket.total.gross >= minimumOrder : true;

  if (!isAboveMinOrder) {
    router.replace('/');
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
          {showCollection && (
            <FormControlLabel
              labelPlacement="start"
              value="collection"
              control={<Radio />}
              label="I’ll collect it"
            />
          )}

          {showDelivery && (
            <FormControlLabel
              labelPlacement="start"
              value="delivery"
              control={<Radio />}
              label="Deliver it to me"
            />
          )}
        </RadioGroup>
      </RadioGroupContainer>

      <Vouchers code={code} handleCodeState={handleCodeState} />

      {value === 'collection' && (
        <Fade in={value === 'collection'} timeout={500}>
          <div>
            <CollectionDetails
              onNext={(state) => handleNext(state, code)}
              checkoutState={checkoutState}
            />
          </div>
        </Fade>
      )}

      {value === 'delivery' && (
        <Fade in={value === 'delivery'} timeout={500}>
          <div>
            <DeliveryDetails
              onNext={(state) => handleNext(state, code)}
              checkoutState={checkoutState}
            />
          </div>
        </Fade>
      )}
    </div>
  );
}
