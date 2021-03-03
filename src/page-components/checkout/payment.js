import React from 'react';

import Stripe from './payment/index';

export default function Payment({ onPrevious, onNext, checkoutState }) {
  return (
    <div>
      <Stripe
        checkoutState={checkoutState}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </div>
  );
}
