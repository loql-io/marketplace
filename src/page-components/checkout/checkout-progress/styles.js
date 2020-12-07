import styled, { css } from 'styled-components';

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 340px;
  max-width: 100%;
  justify-content: space-between;
  padding: 20px 0 8px;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  transition: ease-in-out all 0.2s;

  color: ${(props) =>
    props.done ? '#C0A9A8' : props.active ? '#2F2B27' : '#E9E2DF'};

  ${(props) =>
    props.active &&
    css`
      p {
        font-weight: 900;
      }
    `}
`;

export const DotProgressContainer = styled.div`
  display: flex;
  min-width: 340px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 38px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  transition: ease-in-out all 0.2s;

  background: ${(props) =>
    props.done ? '#C0A9A8' : props.active ? '#2F2B27' : '#E9E2DF'};

  ${(props) =>
    props.done &&
    css`
      p {
        font-weight: 900;
      }
    `}
`;

export const HorizontalLine = styled.div`
  width: 95px;
  height: 3px;
  background: ${(props) => (props.done ? '#C0A9A8' : '#E9E2DF')};
  margin: 0 4px;
`;
