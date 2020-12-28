import styled from 'styled-components';

import { responsive } from 'ui';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;

  ${responsive.xs} {
    display: block;
  }
  ${responsive.sm} {
    grid-template-columns: repeat(12, 1fr);
  }

  ${responsive.md} {
    grid-template-columns: repeat(12, 1fr);
  }

  ${responsive.lg} {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const SectionTitle = styled.h1`
  font-size: 32px !important;
  line-height: 36px !important;
  color: #2f2b27 !important;
  background-color: #fff;
  padding: 24px 0;
  font-weight: 900;
  ${responsive.xs} {
    font-size: 28px !important;
    line-height: 28px !important;
  }
`;
