import styled from 'styled-components';
import Image from '@crystallize/react-image';

import { responsive } from 'ui';
import WidescreenRatio from 'ui/widescreen-ratio';

export const Outer = styled.a`
  display: flex;
  flex-direction: column;
  /*margin-top: -12px;*/
  ${(p) => (p.span ? `grid-column-end: span ${p.span}` : null)};
  background: #2f2b27;
  ${responsive.xs} {
    /*margin-bottom: 15px;*/
  }
  &:hover {
    text-decoration: none;
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
  border: solid 1px #2f2b27;
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

export const Text = styled.div`
  flex: 1 1 auto;
  /*color: var(--color-text-main);*/
  /*background: var(--color-box-background);*/
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  /*background: #2f2b27;*/
  height: 100px !important;

  /*padding: 3em var(--content-padding);*/
  margin-top: -101px;

  z-index: 2;

  ${responsive.xs} {
    padding-bottom: 20px;
    height: auto !important;
    margin-top: 0;
  }
  h3 {
    color: #fff;
    /*margin-top: -110px;*/
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 27px;
    padding: 0 20px;
    ${responsive.xs} {
    }
    ${responsive.md} {
    }
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
