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
  margin-left: 20px;
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
  max-width: 1600px;
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
  margin-bottom: 20px;

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
export const ArticleIntro = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  padding: 0 20px;
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
`;
export const Date = styled.span`
  font-weight: normal;
  color: #816e68;
`;
export const Author = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;
