import styled from 'styled-components';

export const NavContainer = styled.div`
  h3 {
    font-weight: 800;
    font-size: 24px;
    line-height: 27px;
    margin-bottom: 10px;
  }

  a {
    display: flex;
  }
`;

export const NavSections = styled.div`
  border-bottom: solid 1px #e9e2df;
  margin: 10px 0 20px 0;
  &:last-child {
    border-bottom: none;
  }
`;

export const NavInner = styled.div`
  margin-left: 20px;
  padding-bottom: 10px;
`;

export const NavItem = styled.div`
  margin: 10px 0px;
`;

export const Logo = styled.div`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  margin-right: 16px;
`;

export const Name = styled.div`
  display: inline-block;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  margin-top: 8px;
`;

export const Hr = styled.hr``;

export const Spacer = styled.div`
  margin-top: 40px;
  display: inline-block;
`;
