import styled from 'styled-components';
import Grid from 'components/grid';
import { responsive } from '../../../ui/responsive';

export const GridContainer = styled.div`
  background-color: #2f2b27;
  margin-bottom: 20px;
  border-bottom: solid 1px #2f2b27;

  ${responsive.xs} {
    background-color: #fff;
  }

  &:nth-child(3) {
    border-bottom: none;
  }

  &:nth-child(2) > h1 {
    background-color: #2f2b27;
    color: #fff !important;
  }
  &:nth-child(2) > a {
    background-color: #2f2b27;
    color: #fff !important;
  }
  & > h1 {
    padding: 20px !important;
  }

  & div > a > div:nth-child(2) {
    height: 200px;
    width: 100%;
  }
`;

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
export const GridDiv = styled(Grid)`
  /*background-color: var(--color-text-main);*/
  /*margin-top: -12px;*/
  border-bottom: solid 1px #2f2b27;
`;

export const More = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-decoration: underline;
  float: right;
  right: 20px;
  margin-top: 6px;
  position: absolute;
  ${responsive.xs} {
    display: none;
  }
`;

export const MoreMobile = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-decoration: underline;
  background-color: #fff;
  text-align: center;
  display: block;
  padding: 20px 0;

  ${responsive.smPlus} {
    display: none;
  }
`;
