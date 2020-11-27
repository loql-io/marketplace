import styled from 'styled-components';
import { responsive } from '../../../../ui/responsive';

import PrimaryButton from '../../../../components/custom-fields/primary-button';

export const Paragraphs = styled.div``;

export const Outer = styled.div`
  margin: 0;
  height: 320px;
  background-size: cover;
  background-position: center;
  width: 100%;
`;

export const Title = styled.div`
  h3 {
    font-family: Nunito Sans;
    font-weight: 900;
    font-size: 44px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #fff;
    padding-top: 130px;
    margin: 0 auto 20px auto;
    width: 500px;

    ${responsive.xs} {
      padding-top: 160px !important;
      font-size: 30px;
      line-height: 30px;
      width: 300px;
    }
  }
`;

export const Body = styled.div`
  /*margin: 1em var(--content-padding);*/
  /*margin-top: -60px;*/
  margin: 0 20px;
  p {
    color: #fff;

    ${responsive.xs} {
      width: 300px;
    }
  }
`;

export const Text = styled.div`
  margin-bottom: 100px;
`;

export const Button = styled(PrimaryButton)`
  background-color: #2f2b27 !important;
  color: #fff !important;
`;
