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
  grid-gap: 20px 20px;
  padding: 0 20px 40px 20px;
  ${responsive.lgPlus} {
    grid-template-columns: repeat(5, minmax(300px, 1fr));
  }
  ${responsive.lg} {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
  }
  ${responsive.md} {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
  ${responsive.sm} {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
  ${responsive.xs} {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
`;
export const Items = styled.div``;

export const Img = styled(Image)`
  > img {
  width: 100vw;
  height: 40vh;
  object-fit: cover;
  ${responsive.md} {
    height: 38vh;
  }
  ${responsive.smAndLess} {
    height: 30vh;
  }
  ${responsive.xs} {
    height: 20vh;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${responsive.smAndLess} {
    /*
    width: 160px;
    height: 160px;
    */
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
