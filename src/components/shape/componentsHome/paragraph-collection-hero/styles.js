import styled from 'styled-components';
import { responsive } from '../../../../ui/responsive';

export const Paragraphs = styled.div``;

export const Outer = styled.div`
  margin: 0;
  height: 300px;
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
    color: #2f2b27;
    padding-top: 142px;
    ${responsive.xs} {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

export const Body = styled.div`
  margin: 1em var(--content-padding);
`;

export const Text = styled.div`
  margin-bottom: 100px;
`;
