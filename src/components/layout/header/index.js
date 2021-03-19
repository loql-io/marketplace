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
  NavActions,
  IconBar,
  StyledAppBar,
  ShopNav,
  ShopBadge,
  Town,
  LeftAligned,
  Signin,
  NavLink,
  Join,
  Dot
} from './styles';

const TENANT = process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER;
const isBlog = TENANT === 'loql-blog';
const isLoql = TENANT === 'loql';

export default function Header({ simple, preview }) {
  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);

  const isPosts = router.query?.catalogue?.toString() === 'posts';
  const isAbout = router.query?.catalogue?.toString() === 'about';

  return (
    <>
      {preview && (
        <PreviewBar isBlog={isBlog}>
          You are in preview mode (
          <a href={'/api/preview?leave=' + encodeURIComponent(router.asPath)}>
            leave
          </a>
          )
        </PreviewBar>
      )}
      <StyledAppBar position="static">
        {isBlog ? (
          <LeftAligned>
            <Link href="/" passHref>
              <Logo>
                <img src="/static/loql-logo-light.svg" alt="" />
              </Logo>
            </Link>
          </LeftAligned>
        ) : (
          <Link
            href={`https://loql.ly/${process.env.NEXT_PUBLIC_TOWN.toLowerCase()}`}
            passHref
          >
            <Logo>
              <Town>
                {process.env.NEXT_PUBLIC_TOWN
                  ? `${process.env.NEXT_PUBLIC_TOWN}`
                  : ''}
              </Town>
              <img src="/static/loql-logo-light.svg" alt="" />
            </Logo>
          </Link>
        )}

        <BurgerButton
          isBlog={isBlog}
          active={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        />

        {isBlog && (
          <NavActions open={navOpen}>
            <NavLink href="/posts" active={isPosts}>
              Latest{isPosts && <Dot />}
            </NavLink>
            <NavLink href="/about" active={isAbout}>
              About{isAbout && <Dot />}
            </NavLink>
            <Join href={process.env.NEXT_PUBLIC_BLOG_JOIN_URL}>Join</Join>
            <Signin href={process.env.NEXT_PUBLIC_BLOG_SIGNIN_URL}>
              Sign in
            </Signin>
          </NavActions>
        )}
      </StyledAppBar>

      {!isLoql && !isBlog && (
        <Sticky topOffset={48}>
          {({ style }) => (
            <ShopNav style={style}>
              <a href="/">
                <ShopBadge
                  style={{
                    background: `url('/img/logo.png')`
                  }}
                />
              </a>
              {!simple && (
                <IconBar>
                  <BasketButton />
                </IconBar>
              )}
            </ShopNav>
          )}
        </Sticky>
      )}
    </>
  );
}
