import React from 'react';
import MainNav from '../main-nav';
import Navgation from '../../../../navigation';

import { Aside, Header } from './styles';

export default function AsideL() {
  return (
    <Aside>
      <Header>
        <a href="http://loql.ly">
          <h3>Home</h3>
        </a>
      </Header>
      <MainNav data={Navgation} />
    </Aside>
  );
}
