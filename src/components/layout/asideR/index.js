import React from 'react';
import { useBasket, TinyBasket } from 'components/basket';
import PrimaryButton from '../../../components/custom-fields/primary-button';
import { useT } from 'lib/i18n';
import { Basket, Header, Footer } from './styles';

export default function AsideR() {
  const t = useT();
  const basket = useBasket();
  const minimumOrder = Number(process.env.NEXT_PUBLIC_SHOP_MIN_ORDER || 0);
  const isAboveMinOrder =
    minimumOrder > 0 ? basket.total.gross >= minimumOrder : true;

  const onCheckoutClick = (evt) => {
    if (!basket.cart.length && !isAboveMinOrder) {
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
          text={
            isAboveMinOrder
              ? t('basket.goToCheckout')
              : `Minimum order £${minimumOrder}`
          }
          style={{ width: '100%', margin: 0 }}
          disabled={!basket.cart.length || !isAboveMinOrder}
          onClick={onCheckoutClick}
          href="/checkout"
        />
      </Footer>
    </Basket>
  );
}
