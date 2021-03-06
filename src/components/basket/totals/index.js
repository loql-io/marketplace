import React from 'react';

//import { useT } from 'lib/i18n';
import { useBasket } from '../index';

import { Outer, Row, Rows } from './styles';

export const Totals = () => {
  //const t = useT();
  const { total } = useBasket();

  return (
    <Outer>
      <Rows>
        <Row modifier="total-price">
          {/*<span>{t('basket.totalPrice')}:</span>*/}
          <span>Total price:</span>
          <span>
            {/*t('common.price', { value: total.net, currency: total.currency })*/}
            {`£${Number(total.net).toFixed(2)}`}
          </span>
        </Row>
        {/* {discount && (
          <>
            <Row modifier="discount">
              <span>{t('basket.discount')}:</span>
              <span>{t('common.price', { value: discount })}</span>
            </Row>
            <Row modifier="total-after-discount">
              <span>{t('common.totalPriceAfterDiscount')}:</span>
              <span>
                {t('common.price', { value: totalPriceMinusDiscount })}
              </span>
            </Row>
          </>
        )} */}

        <Row modifier="total-vat">
          {/*<span>{t('basket.vat')}:</span>*/}
          <span>VAT:</span>
          <span>
            {/*t('common.price', { value: total.vat, currency: total.currency })*/}
            {`£${Number(total.vat).toFixed(2)}`}
          </span>
        </Row>
        <Row modifier="to-pay">
          {/*<span>{t('basket.totalToPay')}:</span>*/}
          <span>To pay:</span>
          <span>
            {/*t('common.price', {
              value: total.gross,
              currency: total.currency
            })*/}
            {`£${Number(total.gross).toFixed(2)}`}
          </span>
        </Row>
      </Rows>
    </Outer>
  );
};
