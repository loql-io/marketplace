import styled from 'styled-components';
import { responsive } from 'ui';
import Image from '@crystallize/react-image';

export const ProductsFilter = styled.div`
  text-align: left;
`;

export const Chips = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  overflow-x: scroll;
`;

export const Chip = styled.div`
  margin: 0 5px 3px 0;
  display: inline-block;
  background: #fff;
  padding: 8px 16px;
  border-radius: 32px;
  cursor: pointer;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  border: 1px solid #c0a9a8;
  white-space: nowrap;
  &: hover {
    background: #efefef;
  }
  &.selected {
    background: #e9e2df;
  }
`;
export const ProductItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 4fr));
  grid-gap: 80px 40px;
  padding: 0 20px 40px 20px;
  ${responsive.smAndLess} {
    grid-template-columns: repeat(4, minmax(150px, 4fr));
    grid-gap: 20px;
  }
`;
export const Items = styled.div`
  margin: 0 auto;
  /*
  & img {
    display: block;
    object-fit: scale-down;
    object-position: center;
    width: 100%;
    max-height: 320px;

    ${responsive.smAndLess} {
      object-fit: contain;
      max-height: 160px;
    }
  }
  &:hover a {
    text-decoration: none;
  }
  */
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;

  > img {
    display: block;
    object-fit: scale-down;
    object-position: center;
    width: 100%;
    max-height: 320px;
    ${responsive.smAndLess} {
      object-fit: contain;
      max-height: 160px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${responsive.smAndLess} {
    width: 100%;
    height: 160px;
  }
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-top: 10px;
`;

export const ItemPrice = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
`;

export const FadeIn = styled.div`
  animation: fadeIn ease 1.5s;
  -webkit-animation: fadeIn ease 1.5s;
  -moz-animation: fadeIn ease 1.5s;
  -o-animation: fadeIn ease 1.5s;
  -ms-animation: fadeIn ease 1.5s;
  display: inline-flex;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
