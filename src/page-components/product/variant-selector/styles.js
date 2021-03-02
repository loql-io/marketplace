import styled from 'styled-components';
import Image from '@crystallize/react-image';
import is from 'styled-is';
import { responsive } from 'ui';

export const Outer = styled.div`
  margin-bottom: 30px;
`;

export const Variant = styled.div`
  margin-bottom: 15px;
`;

export const Values = styled.div``;

export const Button = styled.button.attrs(() => ({
  type: 'button'
}))`
  color: var(--color-text-sub);
  width: 100%;
  font-weight: bold;
  appearance: none;
  background: white;
  border: none;
  padding: 8px 20px;
  margin: 0;
  cursor: pointer;
  text-transform: capitalize;
  position: relative;
  border-radius: 4px;
  &:focus,
  &:active {
    outline: none;
  }

  ${is('selected')`
    background: #000;
    color: white;
    border: 1px solid #000;
  `};
`;

export const AttributeName = styled.h4`
  margin: 10px 0;
  font-weight: 700;
  font-size: 16px;
  text-align: left;
`;

export const AttributeSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(130px, 1fr));
  gap: 10px;
  margin-bottom: 0.5rem;

  ${responsive.variantGrid1} {
    grid-template-columns: repeat(5, minmax(130px, 1fr));
  }
  ${responsive.variantGrid2} {
    grid-template-columns: repeat(3, minmax(130px, 1fr));
  }
`;

export const AttributeButton = styled.button`
  flex-grow: 1;
  flex-basis: 0;
  font-weight: 800;
  padding: 0.8rem;
  font-size: 18px;
  border: solid 2px #c0a9a8;
  background-color: white;

  text-align: left;
  min-width: 50%;

  &:focus {
    outline: 0;
  }

  ${is('selected')`
    border-color: #75DB86;
    background-color: #E9E2DF;
  `};

  &:first-child {
  }

  &:last-child {
  }
`;

export const VariantImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  max-width: 100px;
  position: relative;
  width: 100%;
`;
export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  > img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
export const Price = styled.div`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 700;
`;
