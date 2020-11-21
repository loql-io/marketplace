import React from 'react';
import isEqual from 'lodash/isEqual';

import {
  Outer
  // AttributeName,
  //AttributeSelector,
  //AttributeButton
  //Variant,
  //Values,
  //Button
} from './styles';

//import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from '../../../ui/mui/inputSelect';

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

export default function VariantSelector({
  variants,
  selectedVariant,
  onVariantChange
}) {
  const attributes = reduceAttributes(variants);
  const classes = styles();

  const [selected, setSelected] = React.useState(selectedVariant.id);

  const [selectedAttrName] = React.useState(
    selectedVariant.attributes.find((item) => item.attribute)?.attribute
  );

  const handleChange = (event) => {
    setSelected(event.target.value);
    onVariantChange(variants.find((item) => item.id === event.target.value));
  };

  const handleAttrChange = (event) => {
    const value = event.target.value;
    const attribute = selectedAttrName;
    onAttributeSelect({ attribute, value });
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
      {Object.keys(attributes).map((attribute, i) => {
        const attr = attributes[attribute];
        const selectedAttr = selectedVariant.attributes.find(
          (a) => a.attribute === attribute
        );

        if (!selectedAttr) {
          return null;
        }

        return (
          <FormControl
            key={i}
            className={classes.inputSelect}
            style={{ marginBottom: '20px' }}
          >
            <Select
              variant="outlined"
              value={selectedAttr.value}
              onChange={(e) => handleAttrChange(e)}
              displayEmpty
              name="attribute"
            >
              <MenuItem value="" disabled>
                Select {selectedAttrName}
              </MenuItem>
              {attr.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      })}
    </Outer>
  );
}
