import Typography from '@material-ui/core/Typography';

import React from 'react';

import StripeCheckout from './payment/index';

export default function Payment({ onPrevious, onNext, checkoutState }) {
  return (
    <div>
      <Typography>Payment</Typography>
      <StripeCheckout
        checkoutState={checkoutState}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </div>
  );
}
