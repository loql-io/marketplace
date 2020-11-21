import React, { useContext } from 'react';
import { LayoutContext } from '@crystallize/react-layout';

//import { Button } from 'ui';
import { useBasket } from 'components/basket';
import { useT } from 'lib/i18n';
import { useLocale } from 'lib/app-config';

import { ProductFooter } from './styles';

import { Button } from '@material-ui/core';
import styles from '../../ui/mui/primaryButton';

export default function BuyButton({ product, selectedVariant }) {
  const basket = useBasket();
  const layout = useContext(LayoutContext);
  const t = useT();
  const locale = useLocale();

  const { identifier, currency } =
    selectedVariant.priceVariants.find(
      (pv) => pv.identifier === locale.crystallizePriceVariant
    ) || {};

  async function buy() {
    await layout.actions.showRight();

    basket.actions.addItem({
      sku: selectedVariant.sku,
      path: product.path,
      priceVariantIdentifier: identifier || locale.crystallizePriceVariant
    });
  }

  const classes = styles();

  return (
    <ProductFooter>
      {/*
      <Price>
        <strong>{t('common.price', { value: price, currency })}</strong>
      </Price>
*/}
      <Button
        onClick={buy}
        disabled={!currency}
        variant="outlined"
        className={classes.button}
      >
        {t('product.addToBasket')}
      </Button>
    </ProductFooter>
  );
}
