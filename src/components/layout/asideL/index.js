import React from 'react';
import MainNav from '../main-nav';
import Navgation from '../../../../navigation';

import { Aside, Header, Logo, Town } from './styles';

export default function AsideL() {
  return (
    <Aside>
      <Header>
        <Logo>
          <Town>
            {process.env.NEXT_PUBLIC_TOWN
              ? `${process.env.NEXT_PUBLIC_TOWN}`
              : ''}
          </Town>
          <img src="/static/Dark-logo.svg" alt="" />
        </Logo>
      </Header>
      <MainNav data={Navgation} />
    </Aside>
  );
}
