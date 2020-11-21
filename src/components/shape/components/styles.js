import styled from 'styled-components';
import Image from '@crystallize/react-image';
import { H2 as H, responsive } from 'ui';

export const Related = styled.div`
  ${responsive.smAndLess} {
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

export const H4 = styled(H)`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 10px;
  ${responsive.xs} {
    text-align: center;
  }
`;

export const RelatedPrice = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  ${responsive.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${responsive.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${responsive.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 20px;
  ${responsive.sm} {
    text-align: center;
  }
  ${responsive.xs} {
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
`;

export const Img = styled(Image)`
  width: 100%;
  overflow: hidden;

  > img {
    display: block;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
    height: 180px;
    ${responsive.xs} {
      height: 120px;
      margin-bottom: 10px;
    }
  }
`;
