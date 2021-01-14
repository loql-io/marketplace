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
