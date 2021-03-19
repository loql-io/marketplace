import styled from 'styled-components';

export const Header = styled.h4`
  margin-left: 20px;
  margin-top: 40px;
  color: #fff;
  h3 {
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    margin-bottom: 10px;
    a {
      display: inline-block;
    }
  }
`;

export const Aside = styled.div`
  background-color: #2f2b27;
  display: flow-root;
  height: inherit;
`;

export const Town = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-top: 7px;
  margin-right: 6px;
`;

export const Logo = styled.a`
  margin: 0 auto;
  height: 38px;
  object-fit: contain;
  margin-top: 8px;
  display: inline-flex;
  &:hover {
    text-decoration: none;
  }
  img,
  svg {
    height: 100%;
  }
`;

export const BlogSide = styled.div`
  & a {
    height: auto;
  }
`;

export const NavLinkContainer = styled.div`
  text-align: center;
  & a {
    display: block;
    margin-bottom: 25px;
  }
`;

export const Signin = styled.a`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  text-decoration: none;
  color: #fff;
`;

export const NavLink = styled.a`
  font-size: 22px;
  line-height: 29px;
  color: #fff;

  &:hover {
    text-decoration: underline !important;
  }
`;

export const Join = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px 7px;
  margin: 0px auto;
  position: static;
  width: 86px;
  height: 40px;
  font-weight: 800;
  background: #79d288;
  box-shadow: 0px 1px 0px rgba(47, 43, 39, 0.25);
  border-radius: 6px;
  font-size: 18px;
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 60px;
  width: 300px;
  @media only screen and (max-height: 600px) {
    position: inherit;
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #c0a9a8;
  margin-top: 50px;
`;
