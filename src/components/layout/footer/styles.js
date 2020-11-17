import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const Outer = styled.footer`
  height: 200px;
  padding: 50px 50px;
  background-color: #2f2b27;
`;

export const Logo = styled.div`
  width: 70px;
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

export const FooterLinks = styled.div`
  color: #c0a9a8;
  ul {
    list-style: none;
    float: right;
    li {
      float: left;
      margin-right: 20px;
    }
  }
`;
