import styled from 'styled-components';

export const NavContainer = styled.div`
  h3 {
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    margin-bottom: 10px;
    color: #fff;
  }

  a {
    display: flex;
    color: #fff;
  }
`;

export const NavSections = styled.div`
  & ~ :nth-last-child(2) div {
    margin-left: 0;
    & a div {
      margin: 0 auto;
    }
  }
`;

export const NavInner = styled.div`
  margin-left: 20px;
  padding-bottom: 10px;
`;

export const NavItem = styled.div`
  margin: 20px 0px;
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
  font-size: 18px;
  line-height: 22px;
  margin-top: 8px;
`;

export const Hr = styled.hr``;

export const Spacer = styled.div`
  margin-top: 40px;
  display: inline-block;
`;

export const CopyRight = styled.div`
  color: #c0a9a8;
  text-align: center;
`;
