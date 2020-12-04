import React from 'react';
import Link from 'next/link';

import {
  Outer,
  Logo,
  FooterText,
  FindOurMoreButton,
  FooterLinks,
  Copyright,
  Grid,
  GridItem,
  GridFooter
} from './styles';

export default function Footer() {
  return (
    <Outer>
      <Grid>
        <GridItem>
          <a href="http://loql.ly">
            <Logo>
              <img src="/static/Dark-logo.svg" alt="" />
            </Logo>
          </a>
          <Copyright>©2020 Loql</Copyright>
        </GridItem>
        <GridItem>
          <FooterText>
            Loql is a not for profit organisation to help protect our high
            streets. We believe that communities of businesses, working with
            rather than against each other can provide a sustainable and
            convenient experience to customers. Made with love right here in
            Berko. <a href="https://loql.ly">Find out more</a>
          </FooterText>
        </GridItem>
        <GridItem>
          <FindOurMoreButton variant="contained" href="http://loql.ly">
            Find out more
          </FindOurMoreButton>
        </GridItem>
      </Grid>
      <GridFooter>
        <GridItem>
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
        </GridItem>
      </GridFooter>
    </Outer>
  );
}
