import styled from 'styled-components';
//import { responsive } from '../../../../ui/responsive';

export const Paragraphs = styled.div``;

export const Outer = styled.div`
  margin: 0;
  height: 140px;
  background-size: cover;
  background-position: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 24px !important;
  line-height: 27px;
  color: #2f2b27;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 0px;
  text-align: left;
`;

export const ShopDetails = styled.div`
  margin-left: 20px;
  margin-bottom: 30px;
  text-align: left;
  svg {
    width: 16px;
    display: inline-block;
    margin-bottom: -10px;
    margin-right: 4px;
  }
`;

export const PhoneNumber = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
`;

export const Body = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
  & p {
    text-align: left !important;
  }
`;

export const Text = styled.div`
  /*margin-bottom: 100px;*/
`;
