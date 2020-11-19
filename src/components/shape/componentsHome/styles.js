import styled from 'styled-components';
import Grid from 'components/grid';
import { responsive } from '../../../ui/responsive';

export const GridContainer = styled.div`
  background-color: #fff;
  &:nth-child(2) > h1 {
    background-color: #2f2b27;
    color: #fff !important;
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
export const GridDiv = styled(Grid)`
  /*background-color: var(--color-text-main);*/
  /*margin-top: -12px;*/
`;
