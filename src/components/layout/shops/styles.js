import styled from 'styled-components';
import { responsive } from 'ui';

export const Grid = styled.div``;

export const NavContainer = styled.div`
  margin-bottom: -21px;
  border-bottom: solid 1px #000;
  h3 {
    font-weight: 800;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 10px;
  }

  a {
    display: flex;
  }
  .eating {
    grid-gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 340px;
    margin: 0 auto;
  }
  .shops {
    grid-gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 700px;
    margin: 0 auto;

    ${responsive.sm} {
      grid-template-columns: repeat(4, 1fr);
    }

    ${responsive.xs} {
      grid-template-columns: repeat(2, 1fr);
      width: 340px;
    }
  }
  .collections {
    grid-gap: 2px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    ${responsive.xs} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const NavSections = styled.div`
  margin: 10px 0 20px 0;
  text-align: center;

  ${responsive.xs} {
    text-align: center !important;
  }

  &:last-child {
    background: #302b26;
  }

  &:last-child > div > h3 {
    background-color: #2f2b27;
    color: #fff !important;
    margin: -20px 0px -10px 0px;
    padding: 20px;
  }
`;

export const NavInner = styled.div`
  margin: 0 auto;
  max-width: 940px;

  padding-bottom: 30px;
`;

export const NavItem = styled.div`
  margin: 10px 0px;
  a:hover {
    color: #ffff;
  }
`;

export const Logo = styled.div`
  border-radius: 50%;
  width: 124px;
  height: 124px;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  margin-right: 16px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin: 0 auto;
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

export const ImgDiv = styled.div`
  width: 100%;
  height: 200px;
  background-position: center !important;
  background-size: cover !important;
  h4 {
    font-weight: 800;
    font-size: 24px;
    line-height: 27px;
    color: #fff;
    margin-bottom: 10px;
  }
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #fff;
  }
`;

export const Text = styled.div`
  position: relative;
  top: 113px;
  margin: 0 20px;
  text-align: left !important;
  p {
    text-align: left !important;
    ${responsive.xs} {
      text-align: center !important;
    }
  }
  ${responsive.xs} {
    text-align: center !important;
  }
`;
