import React from 'react';
import { Attributes, Attribute } from './styles';

const AttributeList = ({ attributes }) => (
  <Attributes>
    {attributes.map(({ attribute, value }) => (
      <Attribute key={attribute}>
        {attribute} {value}
      </Attribute>
    ))}
  </Attributes>
);

export default AttributeList;
