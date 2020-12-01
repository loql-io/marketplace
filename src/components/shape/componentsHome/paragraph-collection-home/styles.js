import styled from 'styled-components';
import { responsive } from '../../../../ui/responsive';

export const Paragraphs = styled.div``;

export const Outer = styled.div`
  margin: 0;
  height: 300px;
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
    color: #2f2b27;
    padding-top: 120px;
    margin-bottom: 20px;
    ${responsive.xs} {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

export const Body = styled.div`
  width: 600px;
  margin: 0 auto;
  ${responsive.xs} {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Text = styled.div`
  margin-bottom: 100px;
`;
