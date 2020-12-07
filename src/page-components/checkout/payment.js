import Typography from '@material-ui/core/Typography';

import React from 'react';

import Stripe from './payment/index';

export default function Payment({ onPrevious, onNext, checkoutState }) {
  return (
    <div>
      <Typography>Payment</Typography>
      <Stripe
        checkoutState={checkoutState}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </div>
  );
}
