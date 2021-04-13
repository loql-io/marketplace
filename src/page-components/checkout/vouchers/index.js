import React, { useState } from 'react';
//import { useBasket } from 'components/basket';
import CustomTextInputField from 'components/custom-fields/custom-text-input';
import { Typography } from '@material-ui/core';
import SecondaryButton from 'components/custom-fields/secondary-button';
import styled from 'styled-components';
import getCrystallizeVouchers from './validate-vouchers';

export default function Vouchers(props) {
  //const basket = useBasket();

  const [discountCode, setDiscountCode] = useState('');
  const [discountCodeHint, setDiscountCodeHint] = useState('');

  const validateCode = async (e) => {
    e.preventDefault();

    const voucherCode = e.target.discountCode.value;

    const response = await getCrystallizeVouchers(voucherCode);

    setDiscountCode(response.voucher?.code);

    const discountPercent = response.voucher?.discountPercent;
    const discountAmount = response.voucher?.discountAmount;

    if (!voucherCode) {
      setDiscountCodeHint('');
    } else if (!response.isValid) {
      setDiscountCodeHint(`Invalid code ${voucherCode}`);
    } else {
      setDiscountCodeHint(
        `Code applied (${
          discountPercent ? `${discountPercent}%` : `£${discountAmount}`
        } off)`
      );
      props.handleCodeState(response.voucher);
    }
  };

  const removeCode = (e) => {
    e.preventDefault();
    setDiscountCode('');
    setDiscountCodeHint('');
  };

  const DiscountCode = styled.form`
    display: inline-flex;

    & .MuiTextField-root {
      width: 226px;
      min-height: auto;
    }
    & div {
      float: left;
    }
  `;

  return (
    <div>
      <Typography variant="body1" style={{ margin: '20px 0px' }}>
        Got a discount code?
      </Typography>

      {!discountCode ? (
        <DiscountCode onSubmit={validateCode}>
          <CustomTextInputField
            name="discountCode"
            label="Discount code"
            helperText={discountCodeHint}
          />
          <SecondaryButton
            text="Apply"
            type="submit"
            style={{ width: 90, marginLeft: 20 }}
          />
        </DiscountCode>
      ) : (
        <DiscountCode onSubmit={removeCode}>
          <CustomTextInputField
            name="discountCode"
            value={discountCode}
            label="Discount code"
            helperText={discountCodeHint}
            readOnly
          />
          <SecondaryButton
            text="Remove"
            type="submit"
            style={{ width: 90, marginLeft: 20 }}
          />
        </DiscountCode>
      )}
    </div>
  );
}
