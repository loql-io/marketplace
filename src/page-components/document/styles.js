import styled from 'styled-components';
import Image from '@crystallize/react-image';

import { H2 as H, responsive } from 'ui';

export const HeroImage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
  grid-gap: 5px;
  height: 240px;
`;

export const H1 = styled(H)`
  font-weight: 900;
  font-size: 36px;
  line-height: 37px;
  padding: 20px;
  margin: 0 auto;
  max-width: 940px;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  &:first-child {
    grid-column-end: span 2;
  }

  > img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const List = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(1, 1fr);
  ${responsive.md} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${responsive.sm} {
    grid-template-columns: repeat(6, 1fr);
  }
  ${responsive.xs} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const H2 = styled(H)`
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-text-main);
  ${responsive.xs} {
    text-align: center;
  }
`;

export const Related = styled.div`
  border-top: 2px solid #efefef;
  max-width: 1440px;
  padding: 100px 100px 0 100px;
  margin: 100px auto;
  display: block;
  ${responsive.smAndLess} {
    padding: 50px;
  }
`;
export const ListItem = styled.li``;
export const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 250px;
`;

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-template-columns: 33.33% auto;
  border-bottom: 1px solid #e9e2df;
  padding-bottom: 20px;
  margin: 0 auto 20px auto;
  max-width: 940px;

  ${responsive.xs} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-columns: auto;
  }
  h3 {
    font-weight: 800;
    font-size: 24px;
    line-height: 27px;
    margin-bottom: 10px;
  }
`;

export const ArticleContainerAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-template-columns: auto;
  padding-bottom: 20px;
  margin: 0 auto 20px auto;
  background: #faf6f6;
  text-align: center;
  img {
    width: 60%;
    height: 100%;
  }

  ${responsive.xs} {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      text-align: center;
    }
  }

  & > div > div > div:nth-child(1) {
    margin: 0 -20px;
    padding: 20px;
    background: #faf6f6;
    & > div {
      max-width: 900px;
      margin: 0 auto;
      & > div:nth-child(2) {
        text-align: center;
      }
    }
    h3 {
      font-weight: 900;
      font-size: 44px;
      line-height: 45px;
    }
    ${responsive.xs} {
      margin: 0 -20px;
    }
  }

  & > div > div > div:nth-child(2) {
    margin: 0 -20px;
    padding: 20px;
    background: #2f2b27;
    & > div {
      max-width: 900px;
      margin: 0 auto;
      & > div:nth-child(2) {
        text-align: center;
      }
    }
    p,
    h3 {
      color: #fff;
    }
  }

  & > div > div > div:nth-child(3) {
    margin: 0 -20px;
    padding: 20px;
    background: #fff;

    & > div {
      max-width: 900px;
      margin: 0 auto;
      & > div:nth-child(2) {
        text-align: center;
      }
    }

    p,
    h3 {
      color: #2f2b27;
    }
    ${responsive.xs} {
      margin: 0 -20px;
    }
  }

  & > div > div > div:nth-child(4) {
    margin: 0 -20px;
    padding: 20px;
    background: #faf6f6;

    & > div {
      max-width: 900px;
      margin: 0 auto;
      & > div:nth-child(2) {
        text-align: center;
      }
    }
    p,
    h3 {
      color: #2f2b27;
    }
    ${responsive.xs} {
      margin: 0 -20px;
    }
  }

  h3 {
    font-weight: 800;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 10px;
  }
`;

export const ArticleIntro = styled.div`
  padding: 0 20px;
  p {
    font-weight: normal;
    font-size: 20px !important;
    line-height: 26px;
  }
`;
export const Article = styled.div`
  padding: 0 20px;
`;
export const ArticleData = styled.div`
  padding: 20px;
  margin-top: -70px;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  margin: -30px auto 20px auto;
  max-width: 940px;
`;
export const Date = styled.span`
  font-weight: normal;
  color: #816e68;
`;
export const Author = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;
