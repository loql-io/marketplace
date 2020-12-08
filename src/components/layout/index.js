import React from 'react';
import Head from 'next/head';
import CrystallizeLayout from '@crystallize/react-layout';

import { Spinner } from 'ui';
import GlobalStyle from 'ui/global';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { StickyContainer } from 'react-sticky';

import AsideR from './asideR';
import AsideL from './asideL';
import Header from './header';
import Footer from './footer';
import {
  Main,
  LoadingWrapper,
  SpinnerWrapper,
  LoadingTextWrapper
} from './styles';

import theme from '../../ui/theme';

function Loader({ children }) {
  return (
    <LoadingWrapper>
      <div>
        <SpinnerWrapper>
          <Spinner size="40" />
        </SpinnerWrapper>
        <LoadingTextWrapper>{children || 'Please wait...'}</LoadingTextWrapper>
      </div>
    </LoadingWrapper>
  );
}

const formatTitle = (str) => {
  return str
    .replace(/-/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};

const shopName = process.env.NEXT_PUBLIC_SHOP_NAME
  ? process.env.NEXT_PUBLIC_SHOP_NAME
  : formatTitle(process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER);

export default function Layout({
  children,
  title,
  description,
  simple,
  loading,
  preview,
  headless
}) {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GATAG}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GATAG}', { 'anonymize_ip': true });`
          }}
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title key="title">{`${shopName} - ${title}`}</title>
        {description && (
          <meta key="description" name="description" content={description} />
        )}
        <link rel="icon" href="/static/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <StickyContainer>
          {simple || headless ? (
            <>
              {!headless && <Header simple={simple} preview={preview} />}
              <Main>{loading ? <Loader /> : children}</Main>
              <Footer />
            </>
          ) : (
            <CrystallizeLayout right={AsideR} left={AsideL}>
              <Header simple={simple} preview={preview} />
              <Main>{loading ? <Loader /> : children}</Main>
              <Footer />
            </CrystallizeLayout>
          )}
        </StickyContainer>
      </ThemeProvider>
    </>
  );
}
