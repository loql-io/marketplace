import React from 'react';
import { Button } from 'ui';

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

export default function FooterButtons({
  previousText = 'back',
  nextText = 'next',
  onNext,
  onPrevious
}) {
  return (
    <ButtonContainer>
      {onPrevious ? (
        <Button onClick={onPrevious}>{previousText}</Button>
      ) : (
        <div />
      )}

      <Button onClick={onNext}>{nextText}</Button>
    </ButtonContainer>
  );
}
