import styled from 'styled-components';
import { responsive } from '../../../../ui/responsive';

import PrimaryButton from '../../../../components/custom-fields/primary-button';

export const Paragraphs = styled.div``;

export const Outer = styled.div`
  margin: 0;
  height: 420px;
  background-size: cover;
  background-position: bottom;
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
    padding-top: 162px;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgb(0 0 0);
    ${responsive.xs} {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

export const Body = styled.div`
  /*margin: 1em var(--content-padding);*/
  /*margin-top: -60px;*/
  margin: 0 20px;
  p {
    color: #fff;
  }
`;

export const Text = styled.div`
  margin-bottom: 100px;
`;

export const Button = styled(PrimaryButton)`
  background-color: #2f2b27 !important;
  color: #fff !important;
`;
