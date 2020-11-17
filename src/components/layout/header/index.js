import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from 'components/auth-context';
import { useT } from 'lib/i18n';
import { makeStyles } from '@material-ui/core/styles';
import BurgerButton from './burger-button';
import BasketButton from './basket-button';

import { AppBar } from '@material-ui/core';

import { Logo, PreviewBar, NavActions, IconBar } from './styles';

const useStyles = makeStyles(() => ({
  appBar: {
    height: 60,
    background: '#fff',
    boxShadow: '0 2px 2px #C0A9a8 '
  }
}));

export default function Header({ simple, preview }) {
  const t = useT();
  const auth = useAuth();
  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  const classes = useStyles();

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
      <AppBar className={classes.appBar} position="fixed">
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

        {!simple && (
          <IconBar>
            <BasketButton />
          </IconBar>
        )}

        <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
      </AppBar>
    </>
  );
}
