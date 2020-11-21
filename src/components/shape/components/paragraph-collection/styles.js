import styled from 'styled-components';
import Images from '../imagesReview';
import { responsive } from 'ui';
export const Paragraphs = styled.div``;

export const Outer = styled.div`
  margin: 0;
`;

export const Title = styled.div`
  /*margin: 1em var(--content-padding);*/
`;

export const Body = styled.div`
  /*margin: 1em var(--content-padding);*/
`;

export const Text = styled.div`
  /*margin-bottom: 100px;*/
`;
export const Media = styled.div`
  margin-bottom: 100px;
`;

export const OuterReview = styled.div`
  background: #faf6f6;
  min-height: 200px;
  ${responsive.smAndLess} {
    padding: 10px 0;
  }
`;

export const BodyReview = styled.div`
  p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    color: #816e68;
    width: 100% !important;
    max-width: none;
  }
`;

export const ImagesReview = styled(Images)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const ReviewText = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const ReviewTitle = styled.div`
  margin: 20px 0;
  padding-top: 40px;
  ${responsive.smAndLess} {
    padding-top: 0px;
  }
`;
