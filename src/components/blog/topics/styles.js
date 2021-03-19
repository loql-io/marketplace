import styled from 'styled-components';

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
