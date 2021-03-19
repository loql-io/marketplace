import styled from 'styled-components';
import { responsive } from 'ui';

export const TopicsContainer = styled.div`
  & a {
    text-decoration: none;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    border-color: #c0a9a8;
    margin-right: 10px;
    margin-bottom: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
  padding: 20px;
  text-align: center;
`;

export const TopicTitle = styled.h3`
  text-align: center;
  margin-top: 30px;
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 20px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;

  max-width: 1024px;
  margin: 0 auto;

  ${responsive.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${responsive.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${responsive.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${responsive.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SectionTitle = styled.h1`
  font-size: 44px;
  line-height: 45px;
  color: #2f2b27 !important;
  background-color: #fff;
  padding: 24px 0;
  font-weight: 900;
  ${responsive.xs} {
    font-size: 28px !important;
    line-height: 28px !important;
  }
`;
