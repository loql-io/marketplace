import styled from 'styled-components';
import Image from '@crystallize/react-image';
import { H1, H2 as H, responsive } from 'ui';

export const Outer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const ShapeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Loader = styled.div`
  text-align: center;
  margin: 50px;
  font-size: 2rem;
`;

export const Sections = styled.div`
  display: flex;
  align-items: initial;
  /*background: var(--color-box-background);*/
  padding: 50px;
  /*flex-direction: row-reverse;*/
  justify-content: center;

  ${responsive.smAndLess} {
    padding: 20px 0px;
    margin: 0 10px;
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 15px;
  ${responsive.xs} {
    display: block;
  }
`;
export const Specs = styled.div`
  flex: 0 0 500px;
  border-left: 15px solid var(--color-main-background);
  background: var(--color-box-background);
  ${responsive.xs} {
    border-left: 0;
    display: block;
    margin-top: 15px;
    padding: 20px 0;
  }
`;

export const Description = styled.div`
  ${responsive.smAndLess} {
    margin: 0 auto;
  }
  h2:empty {
    display: none;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Media = styled.div`
  flex: 0 0 65%;
  position: relative;
  min-height: 48vh;
  /*padding: 3rem;*/

  ${responsive.mdPlus} {
    margin: 0 2em 0 0;
  }

  ${responsive.smAndLess} {
    display: block;
    padding: 0;
    margin: 0;
    min-height: 20vh;
  }
`;

export const MediaInner = styled.div`
  & .image-gallery {
    margin-bottom: 30px;
    ${responsive.smAndLess} {
      margin: 0 -10px 30px -10px;
    }
  }

  & .image-gallery-thumbnail {
    border: 2px solid #fff;
    opacity: 0.5;
    width: 75px;
    margin: 6px 0 0 6px;
    ${responsive.smAndLess} {
      width: 56px;
    }
  }

  & .image-gallery-thumbnail.active,
  & .image-gallery-thumbnail:focus {
    outline: none;
    border: 2px solid #79d288;
    opacity: 1;
  }

  & .image-gallery-thumbnail:hover {
    outline: none;
    border: 2px solid #c0a9a8;
  }

  & .image-gallery-thumbnail-inner img {
    min-height: 71px;

    ${responsive.smAndLess} {
      min-height: 50px;
    }
  }

  & .image-gallery-slide {
    &:focus {
      outline: 0;
    }
  }

  & .image-gallery-slide-wrapper {
    & .image-gallery-image {
      object-fit: cover;

      ${responsive.carouselCustom} {
        object-fit: cover !important;
        height: 500px !important;
        min-height: 500px !important;
      }

      ${responsive.mdPlus} {
        height: 700px;
        min-height: 700px;
      }

      ${responsive.sm} {
        object-fit: contain;
        height: 400px;
        min-height: 400px;
      }
      ${responsive.xs} {
        object-fit: cover;
        height: 300px;
        min-height: 300px;
      }
    }

    ${responsive.carouselCustom} {
      height: 500px !important;
    }

    ${responsive.mdPlus} {
      height: 700px;
    }
    ${responsive.sm} {
      height: 400px;
    }
    ${responsive.xs} {
      height: 300px;
    }
  }

  /*
  & .image-gallery-slide-wrapper {
    position: relative;

    & .image-gallery-swipe {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
*/

  img {
    object-fit: cover;
    /*min-height: 48vh;*/
    min-height: 76vh;
    width: 100%;
    height: 100%;

    ${responsive.smAndLess} {
      min-height: 20vh;
    }
  }
`;

export const Info = styled.div`
  flex: 1 1 auto;
  margin: 0;

  ${responsive.smAndLess} {
    margin: 0;
    text-align: center;
  }
`;
export const Name = styled(H1)`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 37px;
`;

export const Summary = styled.div`
  color: var(--color-text-sub);
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 15px;
`;

export const ProductFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
  /*border-top: 1px solid #cecece;*/
  align-items: center;

  ${responsive.xs} {
    button {
      flex-grow: 1;
      margin: 1rem 0;
    }
  }
`;

export const Price = styled.div`
  text-align: center;
  color: var(--color-text-sub);
  font-size: 30px;
  margin: 20px;
  margin-left: 0;

  strong {
    display: inline-block;
    margin-left: 5px;
  }

  ${responsive.xs} {
    flex-grow: 1;
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
export const H2 = styled(H)`
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-text-main);
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

export const VariantSelectorOuter = styled.div`
  background: #faf6f6;
  padding: 30px;
`;

export const ProductPrice = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
`;
