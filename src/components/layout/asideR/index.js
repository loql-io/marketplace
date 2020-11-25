import React from 'react';

import { useBasket, TinyBasket } from 'components/basket';
import PrimaryButton from '../../../components/custom-fields/primary-button';
import { useT } from 'lib/i18n';

import { Basket, Header, Footer } from './styles';

export default function AsideR() {
  const t = useT();
  const basket = useBasket();

  const onCheckoutClick = (evt) => {
    if (!basket.cart.length) {
      evt.preventDefault();
      return;
    }
  };

  if (basket.status !== 'ready') {
    return t('basket.loading');
  }

  return (
    <Basket>
      <Header>{t('basket.title')}</Header>
      <TinyBasket />
      <Footer>
        <PrimaryButton
          text={t('basket.goToCheckout')}
          style={{ width: '100%', margin: 0 }}
          disabled={!basket.cart.length}
          onClick={onCheckoutClick}
          href="/checkout"
        />
      </Footer>
    </Basket>
  );
}
