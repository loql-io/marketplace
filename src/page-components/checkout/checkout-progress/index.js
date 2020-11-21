import { Typography } from '@material-ui/core';
import React from 'react';
import { ProgressContainer, StepContainer } from './styles';

export default function CheckoutProgress({ currentStep }) {
  return (
    <ProgressContainer>
      <StepContainer currentStep={currentStep === 0}>
        <img src="" alt="" />
        <Typography variant="body2">Your order</Typography>
      </StepContainer>
      <StepContainer currentStep={currentStep === 1}>
        <img src="" alt="" />
        <Typography variant="body2">Payment</Typography>
      </StepContainer>
      <StepContainer currentStep={currentStep === 2}>
        <img src="" alt="" />
        <Typography variant="body2">Review</Typography>
      </StepContainer>
    </ProgressContainer>
  );
}
