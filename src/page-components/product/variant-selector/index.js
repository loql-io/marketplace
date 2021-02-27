import React from 'react';
import isEqual from 'lodash/isEqual';
import styles from '../../../ui/mui/inputSelect';
import {
  Outer,
  AttributeName,
  AttributeSelector,
  AttributeButton,
  Price
} from './styles';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function reduceAttributes(variants) {
  return variants.reduce((acc, variant) => {
    const attrs = acc;

    variant.attributes.forEach(({ attribute, value }) => {
      const currentAttribute = attrs[attribute];
      if (!currentAttribute) {
        attrs[attribute] = [value];
        return;
      }

      const valueExists = currentAttribute.find((str) => str === value);
      if (!valueExists) {
        attrs[attribute].push(value);
      }
    });

    return attrs;
  }, {});
}

function attributesToObject({ attributes }) {
  return Object.assign(
    {},
    ...attributes.map(({ attribute, value }) => ({ [attribute]: value }))
  );
}

function VariantAttributeValue({ value }) {
  return <div>{value}</div>;
}

export default function VariantSelector({
  variants,
  selectedVariant,
  onVariantChange
}) {
  const attributes = reduceAttributes(variants);

  const classes = styles();

  const [selected, setSelected] = React.useState(selectedVariant.id);
  const [defaultVariant] = React.useState(
    variants
      .find((x) => x.isDefault)
      .priceVariants.find((x) => x.identifier === 'default')
  );

  const variantsWithSamePrice = variants.filter(
    (x) => x.priceVariants[0].price === defaultVariant.price
  );

  const [showPrices] = React.useState(
    !(variantsWithSamePrice.length === variants.length)
  );

  const handleChange = (event) => {
    setSelected(event.target.value);
    onVariantChange(variants.find((item) => item.id === event.target.value));
  };

  const getHeader = (attribute, index) => {
    return index === 0 && showPrices
      ? `Select ${attribute}/price`
      : `Select ${attribute}`;
  };

  if (!Object.keys(attributes).length) {
    return (
      <FormControl
        className={classes.inputSelect}
        style={{ marginBottom: '20px' }}
      >
        <Select
          variant="outlined"
          value={selected}
          onChange={(e) => handleChange(e)}
          displayEmpty
          name="variant"
        >
          <MenuItem value="" disabled>
            Select a product
          </MenuItem>
          {variants.map((variant) => (
            <MenuItem key={variant.id} value={variant.id}>
              {variant.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  function onAttributeSelect({ attribute, value }) {
    const selectedAttributes = attributesToObject(selectedVariant);
    selectedAttributes[attribute] = value;

    // Get the most suitable variant
    let variant = variants.find((variant) => {
      if (isEqual(selectedAttributes, attributesToObject(variant))) {
        return true;
      }
      return false;
    });

    /**
     * No variant matches all attributes. Let's select the first one
     * that matches just the new set
     */
    if (!variant) {
      variant = variants.find((variant) =>
        variant.attributes.some(
          (a) => a.attribute === attribute && a.value === value
        )
      );
    }

    if (variant) {
      onVariantChange(variant);
    }
  }

  return (
    <Outer>
      {Object.keys(attributes).map((attribute, index) => {
        const attr = attributes[attribute];
        const selectedAttr = selectedVariant.attributes.find(
          (a) => a.attribute === attribute
        );
        if (!selectedAttr) {
          return null;
        }

        return (
          <div key={attribute}>
            <AttributeName>{getHeader(attribute, index)}</AttributeName>
            <AttributeSelector>
              {attr.map((value, i) => {
                const selectedAttributes = attributesToObject(selectedVariant);
                selectedAttributes[attribute] = value;
                // Get the most suitable variant
                const mostSuitableVariant = variants.find((variant) =>
                  isEqual(selectedAttributes, attributesToObject(variant))
                );

                const hasVariantForAttribute = Boolean(mostSuitableVariant);
                const firstVariant = variants.find((variant) =>
                  isEqual(variant.attributes[0].value, attr[i])
                );
                const firstVariantPrice = firstVariant?.priceVariants.find(
                  (x) => x.identifier === 'default'
                ).price;
                const price =
                  firstVariantPrice > 0 && showPrices
                    ? `£${firstVariantPrice.toFixed(2)}`
                    : '';

                return (
                  <AttributeButton
                    key={value}
                    onClick={() => onAttributeSelect({ attribute, value })}
                    type="button"
                    selected={value === selectedAttr.value}
                    hasVariantForAttribute={hasVariantForAttribute}
                  >
                    <VariantAttributeValue
                      images={mostSuitableVariant?.images}
                      value={value}
                    />
                    <Price>{price}</Price>
                  </AttributeButton>
                );
              })}
            </AttributeSelector>
          </div>
        );
      })}
    </Outer>
  );
}
