import { Typography } from '@material-ui/core';
import React from 'react';
import { ProgressContainer, StepContainer } from './styles';

export default function CheckoutProgress({ currentStep, steps }) {
  return (
    <ProgressContainer>
      {steps.map((step, index) => (
        <StepContainer key={step.title} currentStep={currentStep === index}>
          {step.imageSrc && <img src={step.imageSrc} alt={step.title} />}
          <Typography variant="body2">{step.title}</Typography>
        </StepContainer>
      ))}
    </ProgressContainer>
  );
}
