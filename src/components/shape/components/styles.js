import styled from 'styled-components';
import Image from '@crystallize/react-image';
import { H2 as H, responsive } from 'ui';

export const Related = styled.div`
  margin: 30px;
  ${responsive.smAndLess} {
    padding: 50px;
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

export const H3 = styled(H)`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 20px;
  ${responsive.xs} {
    text-align: center;
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

export const ListItem = styled.li``;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 250px;
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
