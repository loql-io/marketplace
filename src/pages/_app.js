import React from 'react';
import { AuthProvider } from 'components/auth-context';
import { SettingsProvider } from 'components/settings-context';
import { BasketProvider } from 'components/basket';
import { simplyFetchFromGraph } from 'lib/graph';
import { getLocaleFromContext, defaultLocale } from 'lib/app-config';
import { I18nextProvider } from 'lib/i18n';
import { shopClosed } from './api/shopClosed';
import ClosedModal from 'components/ClosedModal';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

export const cache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps, commonData }) {
  const { mainNavigation, locale, localeResource } = commonData;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <I18nextProvider locale={locale} localeResource={localeResource}>
        <SettingsProvider mainNavigation={mainNavigation}>
          <AuthProvider>
            <BasketProvider>
              {commonData?.isShopClosed && (
                <ClosedModal message="Sorry, we're now closed for the holidays." />
              )}
              <Component {...pageProps} />
            </BasketProvider>
          </AuthProvider>
        </SettingsProvider>
      </I18nextProvider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async function ({ router }) {
  try {
    const locale = getLocaleFromContext(router);

    const localeResource = await import(`../locales/${locale.appLanguage}`);

    const isShopClosed = await shopClosed();

    /**
     * Get shared data for all pages
     * - Tenant settings
     * - Main navigation
     */
    const {
      data: {
        tenant,
        mainNavigation: { children: mainNavigation }
      }
    } = await simplyFetchFromGraph({
      query: `
        query COMMON_DATA($language: String!) {
          mainNavigation: catalogue(language: $language, path: "/") {
            children {
              type
              name
              path
            }
          }

          tenant(language: $language) {
            name
          }
        }
      `,
      variables: {
        language: locale.crystallizeCatalogueLanguage
      }
    });

    return {
      commonData: {
        localeResource: localeResource.default,
        locale,
        tenant,
        isShopClosed: isShopClosed?.catalogue?.components?.filter(
          (i) => i.name === 'Shop Closed'
        )?.[0]?.content?.value,
        mainNavigation: mainNavigation?.filter((i) => !i.name.startsWith('_'))
      }
    };
  } catch (error) {
    console.error(error);
    console.warn('Could not fetch common page data');

    // Fallback values
    return {
      commonData: {
        mainNavigation: [],
        locale: defaultLocale,
        tenant: {}
      }
    };
  }
};

export default MyApp;
