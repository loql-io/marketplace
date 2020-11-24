import { Typography } from '@material-ui/core';

import React from 'react';

import StripeCheckout from './payment/StripeCheckout';

export default function Payment() {
  return (
    <div>
      <Typography>Payment</Typography>
      <StripeCheckout />
    </div>
  );
}
