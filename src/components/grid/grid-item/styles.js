import styled from 'styled-components';
import Image from '@crystallize/react-image';

import { H3, responsive } from 'ui';

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;

  > img {
    display: block;
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;

    ${responsive.xs} {
      height: 200px;
      padding: 20px;
    }
  }
`;

export const Title = styled(H3)`
  color: var(--color-text-main);
  font-weight: 900;
  font-family: Nunito Sans;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
`;

export const Text = styled.div`
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 0;
`;

export const Price = styled.span`
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-text-main);
`;

export const Extra = styled.div`
  a {
    display: inline-block;
    text-align: left !important;
  }
  img {
    max-height: 200px !important;
  }

  hr {
    border: 0;
    height: 1px;
    background: #e9e2df;
  }

  h3 {
    color: var(--color-text-main);
    font-weight: 900;
    font-style: normal;
    font-size: 24px;
    line-height: 27px;
  }

  p {
    max-width: 100%;
  }

  button {
    margin-bottom: 30px !important;
    width: 200px;
    display: inherit;

    ${responsive.xs} {
      width: 100% !important;
    }
  }
`;

export const Paragraphs = styled.div``;

export const Outer = styled.a`
  position: relative;
  background: #fff;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column-reverse;
  &:hover {
    text-decoration: none;
  }

  button {
    margin: 0 auto;
    min-width: 200px;
  }

  ${responsive.xs} {
    flex-direction: column-reverse;
    text-align: center;
    margin-bottom: 15px;
    padding: 0;
  }

  ${responsive.mdPlus} {
    /* Each grid type size generates a class "cell-COLUMNxROW" */

    &.cell-1x1 {
      flex-direction: column-reverse;
      justify-content: center;
      /*  padding-bottom: 50px;*/
      text-align: center;
    }
    &.cell-1x2 {
      flex-direction: row-reverse;
      padding: 0 50px 0 0;
      ${Img} {
        width: 200%;
        transform: translateX(-50%);
      }
      button {
        margin: 0 0;
      }
    }
    &.cell-1x3 {
      padding-left: 15rem;
      button {
        margin: 0 0;
      }
    }
    &.cell-2x2 {
      flex-direction: column-reverse;
      padding-bottom: 50px;
      text-align: center;
    }
  }
`;
