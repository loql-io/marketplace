import styled from 'styled-components';

import { responsive } from '../../../ui/responsive';

export const GridContainer = styled.div``;

export const SectionTitle = styled.h1`
  font-size: 32px !important;
  line-height: 36px !important;
  color: #fff !important;
  background-color: #2f2b27;
  padding: 24px 0;
  font-weight: 900;
  ${responsive.xs} {
    font-size: 28px !important;
    line-height: 28px !important;
  }
`;
