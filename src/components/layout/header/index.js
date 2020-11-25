import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
//import { useAuth } from 'components/auth-context';
//import { useT } from 'lib/i18n';

import BurgerButton from './burger-button';
import BasketButton from './basket-button';
import { Sticky } from 'react-sticky';

import {
  Logo,
  PreviewBar,
  //NavActions,
  IconBar,
  StyledAppBar,
  ShopNav,
  ShopBadge
} from './styles';

export default function Header({ simple, preview }) {
  //const t = useT();
  //const auth = useAuth();
  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  const logoImage = process.env.LOGO
    ? process.env.LOGO
    : '/static/default-logo.png';
  const logoBackgroundColor = process.env.LOGO_BG_COLOR
    ? process.env.LOGO_BG_COLOR
    : '#fff';

  return (
    <>
      {preview && (
        <PreviewBar>
          You are in preview mode (
          <a href={'/api/preview?leave=' + encodeURIComponent(router.asPath)}>
            leave
          </a>
          )
        </PreviewBar>
      )}
      <StyledAppBar position="static">
        <Link href="/" passHref>
          <Logo>
            <img src="/static/berko.svg" alt="" />
          </Logo>
        </Link>

        {/*
      <Nav open={navOpen}>
        <NavList>
          {mainNavigation?.map((category) => (
            <NavListItem key={category.path}>
              <Link href={category.path}>
                <a onClick={() => setNavOpen(false)}>{category.name}</a>
              </Link>
            </NavListItem>
          ))}
        </NavList>
      </Nav>
      */}

        <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
      </StyledAppBar>
      <Sticky topOffset={48}>
        {({ style }) => (
          <ShopNav style={style}>
            <a href="/">
              <ShopBadge
                style={{
                  background: `url(${logoImage}) ${logoBackgroundColor}`
                }}
              />
            </a>
            {/*
            <NavActions open={navOpen}>
              {auth.isLoggedIn ? (
                <button type="button" onClick={auth.logout}>
                  Logout
                </button>
              ) : (
                <Link href="/login">
                  <a>{t('customer.login.title')}</a>
                </Link>
              )}
            </NavActions>
*/}
            {!simple && (
              <IconBar>
                <BasketButton />
              </IconBar>
            )}
          </ShopNav>
        )}
      </Sticky>
    </>
  );
}
