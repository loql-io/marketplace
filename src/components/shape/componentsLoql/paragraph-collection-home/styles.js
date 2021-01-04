import styled from 'styled-components';
import { responsive } from '../../../../ui/responsive';

import PrimaryButton from '../../../../components/custom-fields/primary-button';

export const Paragraphs = styled.div``;

export const Outer = styled.div`
  margin: 0;
  height: 280px;
  background-color: #2f2b27;
  width: 100%;
  ${responsive.smAndLess} {
    height: auto;
  }
  padding-top: 20px;
`;
export const Content = styled.div`
  display: inline-block;
  max-width: 400px;
  margin-top: 30px;
  ${responsive.smAndLess} {
    margin-top: 20px;
    max-width: auto;
  }
`;
export const Image = styled.div`
  background-size: auto;
  background-position: center;
  width: 400px;
  height: 220px;
  display: inline-block;
  background-repeat: no-repeat;
  margin-top: 10px;

  ${responsive.smAndLess} {
    background-size: contain;
    background-position: center;
    margin: 0 auto;
    height: 180px;
    display: block;
    float: none;
    width: 80%;
  }
`;

export const Title = styled.div`
  h3 {
    font-family: Nunito Sans;
    font-weight: 900;
    font-size: 44px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #fff;
    margin: 0 auto 20px auto;
    line-height: 46px;
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

export const Text = styled.div``;

export const Button = styled(PrimaryButton)`
  background-color: #2f2b27 !important;
  color: #fff !important;
`;
