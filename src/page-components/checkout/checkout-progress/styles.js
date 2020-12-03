import styled, { css } from 'styled-components';

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 340px;
  max-width: 100%;
  justify-content: space-between;
  padding: 20px 0;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.currentStep ? ' #2F2B27 ' : '#E9E2DF')};

  ${(props) =>
    props.currentStep &&
    css`
      p {
        font-weight: 900;
      }
    `}
`;
