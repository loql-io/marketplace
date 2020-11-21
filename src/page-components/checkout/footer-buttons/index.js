import React from 'react';

import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';

import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  justify-content: space-between;

  button + button {
    margin-left: 12px;
  }
`;

import SecondaryButton from 'components/custom-fields/secondary-button';
import PrimaryButton from 'components/custom-fields/primary-button';

export default function FooterButtons({
  previousText = 'Back',
  nextText = 'Next',
  onNext,
  onPrevious
}) {
  return (
    <ButtonContainer>
      <SecondaryButton
        text={previousText}
        onClick={onPrevious}
        style={{ width: 150 }}
        startIcon={<ChevronLeftRoundedIcon />}
      />

      <PrimaryButton
        text={nextText}
        onClick={onNext}
        style={{ width: 150, margin: 0 }}
      />
    </ButtonContainer>
  );
}
