import React from 'react';
import MainNav from '../main-nav';
import Navgation from '../../../../navigation';

import { Aside, Logo, Header } from './styles';

export default function AsideL() {
  return (
    <Aside>
      <Header>
        <Logo>
          <img src="/static/berko.svg" alt="" />
        </Logo>
      </Header>
      <MainNav data={Navgation} />
    </Aside>
  );
}
