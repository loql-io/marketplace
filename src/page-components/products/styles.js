import styled from 'styled-components';
import { responsive } from 'ui';

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

export const Items = styled.div`
  margin: 0 0 18px 18px;
  & img {
    display: block;
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
    /*
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    */
  }
  /*
  &:hover img {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }*/
  &:hover a {
    text-decoration: none;
  }
`;

export const ImageContainer = styled.div`
  width: 146px;
  height: 146px;
  overflow: hidden;
  ${responsive.xs} {
    width: 160px;
    height: 160px;
  }
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-top: 10px;
  width: 146px;
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
