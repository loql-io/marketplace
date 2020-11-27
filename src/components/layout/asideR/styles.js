import styled from 'styled-components';
import { responsive } from 'ui';

export const Header = styled.h4`
  font-family: Nunito Sans;
  margin-top: 30px;
  align-items: center;
  position: relative;
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  color: #2f2b27;
`;

export const Basket = styled.div`
  position: relative;
  height: 100vh;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #faf6f6;
  z-index: 15;
  ${responsive.xs} {
    padding: 0 12px !important;
  }
`;

export const Footer = styled.div`
  padding: 0px 0 50px;
  background: #faf6f6;
`;
