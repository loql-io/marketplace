import styled from 'styled-components';
import Image from '@crystallize/react-image';
import { Button } from '@material-ui/core';
import { responsive } from 'ui';
import WidescreenRatio from 'ui/widescreen-ratio';

export const Outer = styled.a`
  display: flex;
  flex-direction: column;
  ${(p) => (p.span ? `grid-column-end: span ${p.span}` : null)};
  background: #2f2b27;

  &:hover {
    text-decoration: none;
  }
}
`;

export const MediaWrapper = styled(WidescreenRatio)`
  flex: 0 0 auto;
`;

export const MediaInner = styled.div`
  flex: 1 1 100%;
  margin: 0;
  background-size: cover;
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

export const TextMain = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  @media screen and (max-width: 818px) {
    margin-top: -198px;
  }

  @media screen and (max-width: 767px) {
    margin-top: -218px;
  }

  @media screen and (max-width: 690px) {
    margin-top: -240px;
  }

  @media screen and (max-width: 443px) {
    margin-top: -277px;
  }

  @media screen and (max-width: 386px) {
    margin-top: -299px;
  }
`;
export const Text = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  ${responsive.xs} {
    margin-top: -134px;
  }
`;

export const TitleMain = styled.div`
  color: #fff;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const Title = styled.div`
  color: #fff;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
  ${responsive.xs} {
    font-size: 20px;
    line-height: 22px;
  }
`;

export const Description = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  line-height: 1.2rem;
  color: inherit;
  text-align: center;
`;

export const Subtitle = styled.h4`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  margin: 10px 20px;
`;

export const ItemContainer = styled.div`
  position: relative;
  &:first-child a {
    height: 460px;
  }
  &:first-child a > :first-child > div {
    height: 460px;
  }

  & a {
    height: 300px;
  }
  & a > :first-child > div {
    height: 300px;
  }

  &:first-child {
    grid-column: 1 / 4;
  }

  ${responsive.sm} {
    &:first-child {
      grid-column: 1 / 3;
    }
  }

  ${responsive.xs} {
    &:first-child {
      grid-column: 1/1;
    }

    &:first-child a > :first-child {
      height: 540px;
    }
  }
`;

export const Intro = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const Topics = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 5px;
`;

export const FindOurMoreButton = styled(Button)`
  height: 28px;
  width: 120px;
  left: 0px;
  top: 0px;
  border-radius: 6px;
  color: #2f2b27;
  font-size: 14px !important;
  ${responsive.xs} {
    margin-bottom: 0px !important;
  }
`;
