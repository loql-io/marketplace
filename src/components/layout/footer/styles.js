import styled from 'styled-components';
import { responsive } from 'ui';
import { Button } from '@material-ui/core';

export const Outer = styled.footer`
  min-height: 200px;
  padding: 50px 50px;
  background-color: #2f2b27;
`;

export const Logo = styled.div`
  text-align: center;
`;

export const NavList = styled.footer`
  list-style: none;
  font-weight: 500;
  font-size: 1rem;
  display: block;
  margin: 0 0 0 auto;

  li {
    line-height: 1.5rem;
  }
  h5 {
    font-size: 0.7rem;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

export const Powered = styled.div`
  width: 100%;
  display: block;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;

  p {
    margin: 0;
  }

  svg {
    width: 120px;
  }
`;

export const FooterText = styled.div`
  color: #fff;
  text-align: left;
  ${responsive.xs} {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const FindOurMoreButton = styled(Button)`
  height: 28px;
  width: 140px;
  left: 0px;
  top: 0px;
  border-radius: 6px;
  color: #2f2b27;
  font-size: 14px !important;
`;

export const Copyright = styled.span`
  color: #c0a9a8;
  margin-top: 20px;
  display: inline-block;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  grid-template-columns: 25% auto 25%;
  ${responsive.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.div`
  text-align: center;
`;

export const GridFooter = styled.div`
  margin-right: 4.5%;
  ${responsive.xs} {
    margin-right: 0;
  }
`;
export const FooterLinks = styled.div`
  color: #c0a9a8;
  text-align: right;
  margin-top: -20px;
  ${responsive.xs} {
    text-align: center;
    margin-top: 20px;
  }
  span {
    margin-right: 20px;
  }
`;
