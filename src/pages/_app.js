import React, { useEffect } from 'react';
import { AuthProvider } from 'components/auth-context';
import { SettingsProvider } from 'components/settings-context';
import { BasketProvider } from 'components/basket';
import { simplyFetchFromGraph } from 'lib/graph';
import { getLocaleFromContext, defaultLocale } from 'lib/app-config';
import { I18nextProvider } from 'lib/i18n';
import { homePageShape, booleanContent } from './api/homePageShape';
import ClosedModal from 'components/ClosedModal';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import './home.css';

export const cache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps, commonData }) {
  const {
    mainNavigation,
    locale,
    localeResource,
    openDays,
    shopClosedLabel
  } = commonData;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    localStorage.setItem(
      `openTimes_${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}`,
      JSON.stringify(openDays ? openDays : [])
    );
  }, [openDays]);

  return (
    <CacheProvider value={cache}>
      <I18nextProvider locale={locale} localeResource={localeResource}>
        <SettingsProvider mainNavigation={mainNavigation}>
          <AuthProvider>
            <BasketProvider>
              {commonData?.isShopClosed && (
                <ClosedModal message={shopClosedLabel} />
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

    const gethomePageShape = await homePageShape();

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
            id
            name
          }
        }
      `,
      variables: {
        language: locale.crystallizeCatalogueLanguage
      }
    });

    const getBooleanContent = await booleanContent(
      gethomePageShape?.catalogue?.shape?.identifier,
      tenant?.id
    );

    const shopClosedLabel = getBooleanContent?.shape?.get?.components?.find(
      (c) => c.id === 'shop-closed'
    )?.description;
    const isShopClosed = getBooleanContent?.shape?.get?.items[0]?.components?.find(
      (c) => c.componentId === 'shop-closed'
    )?.content?.value;
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    const openWeek = getBooleanContent?.shape?.get?.items[0]?.components.filter(
      (x) => x.name === 'Opening Hours'
    )?.[0]?.content?.chunks[0];

    const openWeekTimes = getBooleanContent?.shape?.get?.components.filter(
      (x) => x.name === 'Opening Hours'
    )?.[0]?.config?.components;

    const openDaysValue = openWeek?.filter(
      (x) => days.indexOf(x.name) !== -1 && x.content.value
    );

    const openDaysTimes = openWeekTimes?.filter(
      (x) => days.indexOf(x.name) !== -1
    );

    const openDays = [];

    if (openDaysValue) {
      Object.keys(openDaysValue).forEach((key) => {
        openDays.push({
          day: openDaysValue[key].name,
          open: openDaysValue[key].content?.value,
          time: openDaysTimes.find((c) => c.name === openDaysValue[key].name)
            .description
        });
      });
    }

    return {
      commonData: {
        localeResource: localeResource.default,
        locale,
        tenant,
        openDays,
        shopClosedLabel,
        isShopClosed,
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
