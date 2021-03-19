import styled from 'styled-components';
import React from 'react';
import { LayoutContext } from '@crystallize/react-layout';
import { responsive } from 'ui';

const Outer = styled.button.attrs(() => ({
  type: 'button'
}))`
  cursor: pointer;
  background: transparent;
  width: 40px;
  height: 40px;
  position: absolute;
  margin-right: 15px;
  margin-top: 5px;
  margin-left: 5px;
  z-index: 100;
  padding: 0;
`;

const HideOnMobiles = styled.span`
  display: contents;
  ${responsive.smPlus} {
    display: none;
  }
`;

export default function BurgerButton({ active, isBlog }) {
  const layout = React.useContext(LayoutContext);

  if (isBlog) {
    return (
      <HideOnMobiles>
        <Outer open={active} onClick={layout?.actions?.showLeft}>
          <img src="/static/burger.svg" />
        </Outer>
      </HideOnMobiles>
    );
  } else {
    return (
      <Outer open={active} onClick={layout?.actions?.showLeft}>
        <img src="/static/burger.svg" />
      </Outer>
    );
  }
}
