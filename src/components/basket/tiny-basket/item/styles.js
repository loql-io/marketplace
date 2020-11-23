import styled, { keyframes, css } from 'styled-components';
import CrystallizeImage from '@crystallize/react-image';

export const drawAttentionDuration = 400;

const drawAttention = keyframes`
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(0.97);
    }
    75% {
      transform: scale(0.93);
    }
    100% {
      transform: scale(1);
    }
  `;

export const Row = styled.div`
  width: 100%;
`;

export const ItemDelete = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0px;
  display: none;
  height: 24px;

  &:before {
    content: '+';
    display: block;
    transform: rotate(45deg);
    font-size: 12px;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  position: relative;
  grid-gap: 16px;
  ${(p) =>
    p.animate &&
    css`
      animation: ${drawAttention} ${drawAttentionDuration}ms 1;
    `};
  &:hover {
    ${ItemDelete} {
      display: block;
    }
  }
`;

export const ItemInfo = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const ItemInfoText = styled.div``;

export const ItemImage = styled(CrystallizeImage).attrs(() => ({
  sizes: '90px'
}))`
  width: 90px;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

export const ItemQuantityChanger = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -8px;

  button {
    margin: 6px 0;

    svg {
      font-size: 22px;
    }

    img {
      width: 24px;
    }
  }
`;

export const ItemQuantity = styled.span`
  display: inline-block;
  text-align: center;
  font-weight: 800;
  font-size: 18px;
  margin-top: -2px;
`;

export const PriceWrapper = styled.div`
  font-size: 16px;
  padding: 5px 10px 0 0;
  margin: 4px 0;
  color: var(--color-text-main);
`;
export const PriceWrap = styled.div`
  display: flex;
`;

export const Price = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  ${(p) => p.isDiscounted && 'text-decoration: line-through'};
`;

export const PriceVat = styled.div`
  padding-top: 6px;
  font-size: 14px;
  line-height: 19px;
  color: #816e68;
`;

export const SubInfoOuter = styled.div`
  font-size: 0.8rem;
`;

export const SubInfoLine = styled.div`
  margin-top: 5px;
`;
export const IconButton = styled.button`
  &:disabled svg {
    color: #c1c1c1;
  }
`;
