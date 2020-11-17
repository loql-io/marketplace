import React from 'react';

import { Grid } from '@material-ui/core';

import Link from 'next/link';

import {
  Outer,
  Logo,
  FooterText,
  FindOurMoreButton,
  FooterLinks,
  Copyright
} from './styles';

export default function Footer() {
  return (
    <Outer>
      <Grid container spacing={3}>
        <Grid item xs style={{ textAlign: 'center' }}>
          <a href="http://loql.ly">
            <Logo>
              <img src="/static/Dark-logo.svg" alt="" />
            </Logo>
            <Copyright>©2020 Loql</Copyright>
          </a>
        </Grid>
        <Grid item sm={6}>
          <FooterText>
            Loql is a not for profit that helps high streets find resilience
            through high quality, low cost digital tools that can be shared and
            managed by the community.
          </FooterText>
        </Grid>
        <Grid item xs style={{ textAlign: 'center' }}>
          <FindOurMoreButton variant="contained" href="http://loql.ly">
            Find out more
          </FindOurMoreButton>
          <FooterLinks>
            <span>
              <Link href="https://app.termly.io/document/terms-and-conditions/f9ff0a97-03a4-49b8-aaab-94ac15fe4cb0">
                Terms & Conditions
              </Link>
            </span>
            <span>
              <Link href="https://app.termly.io/document/privacy-policy/c50fdb8a-cd64-4af3-acd5-33a4f4132cc5">
                Privacy policy
              </Link>
            </span>
            <span>
              <Link href="https://app.termly.io/document/cookie-policy/6665641b-19b3-4069-95b0-3a932c60e919">
                Cookie policy
              </Link>
            </span>
          </FooterLinks>
        </Grid>
      </Grid>
    </Outer>
  );
}
