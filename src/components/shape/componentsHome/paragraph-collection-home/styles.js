import styled from 'styled-components';
import { responsive } from '../../../../ui/responsive';

export const Paragraphs = styled.div``;

export const Outer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  position: relative;
  min-height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
    display: inline-block;
    margin-bottom: -10px;
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
    padding-right: 30%;
    ${responsive.smAndLess} {
      padding-right: 20px;
      margin-right: 20px;
    }
  }
`;

export const Text = styled.div`
  text-align: left;
  /*margin-bottom: 100px;*/
`;

export const CollectDeliveryTimeContainer = styled.div`
  padding: 20px;
  width: 100%;
  margin: 130px auto 0 auto;
  display: flex;

  ${responsive.sm} {
    margin: 130px 0 0 0;
  }

  & span {
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
  }
`;

export const Pill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  background: #2f2b27;
  padding: 0 10px;
  color: #fff;
  border-radius: 4px 4px 4px 4px;
  margin-right: 10px;
`;
