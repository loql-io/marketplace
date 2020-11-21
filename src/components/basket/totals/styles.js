import styled from 'styled-components';

export const Outer = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;
`;

export const Rows = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 22px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 13px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 5px;
  }

  > :last-child {
    font-weight: normal;
    text-align: right;

    opacity: ${(p) => (p.hideValue ? '0' : '1')};
  }
`;

export const StrikeThrough = styled.span`
  text-decoration: line-through;
`;
