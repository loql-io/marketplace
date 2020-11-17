import React from 'react';

import { Grid } from '@material-ui/core';

import Link from 'next/link';

import {
  Outer,
  Logo,
  FooterText,
  FindOurMoreButton,
  FooterLinks
} from './styles';

export default function Footer() {
  return (
    <Outer>
      <Grid container spacing={3}>
        <Grid item xs>
          <a href="http://loql.ly">
            <Logo>
              <img src="/static/Dark-logo.svg" alt="" />
            </Logo>
          </a>
        </Grid>
        <Grid item xs={6}>
          <FooterText>
            Loql is a not for profit that helps high streets find resilience
            through high quality, low cost digital tools that can be shared and
            managed by the community.
          </FooterText>
        </Grid>
        <Grid item xs style={{ textAlign: 'center' }}>
          <FindOurMoreButton variant="contained" href="http://loql.ly" passHref>
            Find out more
          </FindOurMoreButton>
        </Grid>
      </Grid>
      <FooterLinks>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            ©2020 Loql
          </Grid>
          <Grid item xs>
            <ul>
              <li>
                <Link href="https://app.termly.io/document/terms-and-conditions/f9ff0a97-03a4-49b8-aaab-94ac15fe4cb0">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="https://app.termly.io/document/privacy-policy/c50fdb8a-cd64-4af3-acd5-33a4f4132cc5">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="https://app.termly.io/document/cookie-policy/6665641b-19b3-4069-95b0-3a932c60e919">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </FooterLinks>
    </Outer>
  );
}
