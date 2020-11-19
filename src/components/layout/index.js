import React from 'react';
import Head from 'next/head';
import CrystallizeLayout from '@crystallize/react-layout';

import { Spinner } from 'ui';
import GlobalStyle from 'ui/global';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { StickyContainer } from 'react-sticky';

import Aside from './aside';
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

export default function Layout({
  children,
  title,
  description,
  simple,
  loading,
  preview
}) {
  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <title key="title">{title || ''}</title>
        {description && (
          <meta key="description" name="description" content={description} />
        )}
        <link rel="icon" href="/static/favicon.svg" />
        <link rel="mask-icon" href="/static/mask-icon.svg" color="#5bbad5" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
        <link rel="manifest" href="/static/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <StickyContainer>
          {simple ? (
            <>
              <Header simple={simple} preview={preview} />
              <Main>{loading ? <Loader /> : children}</Main>
              <Footer />
            </>
          ) : (
            <CrystallizeLayout right={Aside}>
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
