import { Typography } from '@material-ui/core';
import React from 'react';

import TickIcon from '../../../../public/static/tick.svg';
import {
  Dot,
  ProgressContainer,
  DotProgressContainer,
  StepContainer,
  HorizontalLine
} from './styles';

export default function CheckoutProgress({ currentStep, steps }) {
  return (
    <>
      <ProgressContainer>
        {steps.map((step, index) => (
          <StepContainer
            key={'steps' + step.title}
            done={currentStep > index}
            active={currentStep === index}
          >
            {step.Icon && currentStep > index ? <TickIcon /> : <step.Icon />}
            <Typography variant="body2">{step.title}</Typography>
          </StepContainer>
        ))}
      </ProgressContainer>
      <DotProgressContainer>
        {steps.map((step, index) => (
          <React.Fragment key={'progress' + step.title}>
            <Dot done={currentStep > index} active={currentStep === index} />
            {index < steps.length - 1 && (
              <HorizontalLine done={currentStep > index} />
            )}
          </React.Fragment>
        ))}
      </DotProgressContainer>
    </>
  );
}
