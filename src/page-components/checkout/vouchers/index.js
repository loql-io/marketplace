import React, { useState } from 'react';
import { useBasket } from 'components/basket';
import CustomTextInputField from 'components/custom-fields/custom-text-input';
import { Typography } from '@material-ui/core';
import SecondaryButton from 'components/custom-fields/secondary-button';
import styled from 'styled-components';
import ServiceApi from 'lib/service-api';
import GET_VOUCHER from './get-voucher-query.js';

export default function Vouchers(props) {
  const basket = useBasket();

  const [discountCode, setDiscountCode] = useState(
    basket.metadata?.voucherCode?.code || null
  );
  const [discountCodeHint, setDiscountCodeHint] = useState('');

  const validateCode = async (e) => {
    e.preventDefault();
    const voucherCode = e.target.discountCode.value;
    const response = await ServiceApi({
      query: GET_VOUCHER,
      variables: { code: voucherCode }
    });

    setDiscountCode(response.data.voucher.voucher?.code);

    const discountPercent = response.data.voucher.voucher?.discountPercent;
    const discountAmount = response.data.voucher.voucher?.discountAmount;

    if (!voucherCode) {
      setDiscountCodeHint('');
    } else if (!response.data.voucher.isValid) {
      setDiscountCodeHint(`Invalid code ${voucherCode}`);
      //basket.actions.addVoucherCode(voucherCode);
    } else {
      setDiscountCodeHint(
        `Code applied (${
          discountPercent ? `${discountPercent}%` : `£${discountAmount}`
        } off)`
      );
      //setCode(response.data.voucher.voucher?.code)
      props.handleCodeState(response.data.voucher.voucher);
      //basket.actions.addVoucherCode(voucherCode);
    }

    console.log('child', basket);
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
