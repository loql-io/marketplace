import styled from 'styled-components';
import is from 'styled-is';

import { responsive } from 'ui';

export const Outer = styled.header`
  text-align: center;
  padding: 20px 75px;
  max-width: 1600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;

  ${responsive.smAndLess} {
    padding: 10px 90px 10px 20px;
    justify-content: space-between;
  }
`;

export const Logo = styled.a`
  margin: 0 auto;
  height: 34px;
  object-fit: contain;
  margin-top: 8px;
  img,
  svg {
    height: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin: 10px 0 0 15px;
  padding-left: 15px;
  width: 100%;
  ${responsive.mdPlus} {
    justify-content: center;
  }
  ${responsive.smAndLess} {
    display: none;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    min-height: 100vh;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    border: none;
    background: #fafafa;
    margin: 0;
    padding: 2em;
    font-size: 1.5rem;

    ${is('open')`
      display: block;
    `};
  }
`;

export const NavList = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;

  /* Make space for logout button */
  ${responsive.smAndLess} {
    margin-top: 30px;
  }
`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px;

  > a {
    display: inline-block;
    padding: 10px 10px;
    transition: all 100ms;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      text-decoration: underline;
    }
  }

  ${responsive.smAndLess} {
    display: block;
  }
`;

export const Btn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: 0;
  border-radius: 5px;
  justify-self: flex-end;
  margin-left: 15px;
  img,
  svg {
    width: 40px;
  }
  svg path {
    stroke: var(--color-text-sub);
  }

  &:hover,
  &:active {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const BasketQuantity = styled.div`
  position: absolute;
  font-size: 10px;
  top: 18px;
  right: -4px;
  transform: translate(-50%, -25%);
  color: #fff;
  background-color: #f26889;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-weight: 800;
  line-height: 17px;
`;

export const NavActions = styled.div`
  margin: 8px 10px 0;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  right: 63px;
  position: absolute;
  top: 8px;

  button,
  a {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 500;
    border: 1.4px solid var(--color-text-main);
    color: var(--color-text-main);
    white-space: nowrap;

    cursor: pointer;

    &:hover {
      background: var(--color-text-main);
      color: var(--color-main-background);
      text-decoration: none;
    }
  }

  ${responsive.smAndLess} {
    display: none;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    z-index: 99;
    text-align: center;
    margin: 0;
    font-size: 1.5rem;

    ${is('open')`
      display: flex;
      justify-content: center;
    `};
  }
`;

export const PreviewBar = styled.div`
  background: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;
export const IconBar = styled.div`
  display: flex;
  right: 10px;
  top: 12px;
  position: absolute;
`;

export const StyledAppBar = styled.header`
  height: 48px;
  background-color: #fff;
  position: relative;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const ShopNav = styled.div`
  background: #2f2b27;
  height: 68px;
  z-index: 100;
  position: relative;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const ShopBadge = styled.div`
  margin-top: -20px;
  width: 126px;
  height: 126px;
  display: inline-block;
  margin-left: 20px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-size: 100% !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
`;
