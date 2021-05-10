import React from 'react';
import MainNav from '../main-nav';
import Community from '../../community';
import {
  Aside,
  Header,
  Logo,
  Town,
  NavLink,
  Join,
  Signin,
  BlogSide,
  NavLinkContainer,
  Bottom,
  Copyright
} from './styles';

export default function AsideL() {
  const { shopping } = Community();
  const { eating } = Community();

  const Navgation = [
    {
      section: [
        {
          type: 'Home',
          content: []
        },
        {
          type: 'Shopping',
          content: shopping
        },
        {
          type: 'Eating',
          content: eating
        },
        {
          type: 'Footer',
          content: [
            {
              logo: '',
              name: 'About',
              url: 'https://loql-ly.vercel.app/about'
            },
            {
              logo: '',
              name: 'Join',
              url: 'https://forms.gle/YRV4zeEsgUGSo9vS7'
            }
          ]
        }
      ]
    }
  ];

  return (
    <Aside>
      {process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER === 'loql-blog' ? (
        <BlogSide>
          <Header style={{ textAlign: 'center', marginLeft: 0 }}>
            <Logo>
              <img src="/static/Dark-logo.svg" alt="" />
            </Logo>
          </Header>
          <NavLinkContainer>
            <NavLink href="/posts">Latest</NavLink>
            <NavLink href="/about">About</NavLink>
            <Bottom>
              <Join href={process.env.NEXT_PUBLIC_BLOG_JOIN_URL}>Join</Join>
              <Signin href={process.env.NEXT_PUBLIC_BLOG_SIGNIN_URL}>
                Sign in
              </Signin>
              <Copyright>©2021 Loql</Copyright>
            </Bottom>
          </NavLinkContainer>
        </BlogSide>
      ) : (
        <>
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
        </>
      )}
    </Aside>
  );
}
