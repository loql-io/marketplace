import React from 'react';
import Link from 'next/link';

import TwitterIcon from '../../../../public/static/TW.svg';
import FacebookIcon from '../../../../public/static/Facebook.svg';
import LinkedInIcon from '../../../../public/static/LI.svg';
import data from '../../../../package.json';

import {
  Outer,
  Logo,
  FooterText,
  FindOurMoreButton,
  FooterLinks,
  Copyright,
  Grid,
  GridItem,
  GridFooter,
  SocialLink,
  Version
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
        </GridItem>
        <GridItem>
          <FooterText>
            Loql is a not for profit that helps high streets find resilience
            through high quality, low cost digital tools that can be shared and
            managed by the community.
          </FooterText>
        </GridItem>
        <GridItem>
          <FindOurMoreButton variant="contained" href="http://loql.ly">
            Find out more
          </FindOurMoreButton>
        </GridItem>
        <GridItem>
          <SocialLink
            href="https://www.facebook.com/keepitloql"
            target="_blank"
          >
            <FacebookIcon />
          </SocialLink>
          <SocialLink href="https://twitter.com/keepitloql" target="_blank">
            <TwitterIcon />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/company/loql"
            target="_blank"
          >
            <LinkedInIcon />
          </SocialLink>
        </GridItem>
      </Grid>
      <GridFooter>
        <GridItem>
          <Copyright>©2020 Loql</Copyright>
        </GridItem>
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
      <Version>
        {data.devDependencies['loql-marketplace']
          ? data.devDependencies['loql-marketplace'].split('#v').pop()
          : ''}
      </Version>
    </Outer>
  );
}
