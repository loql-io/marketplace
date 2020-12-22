import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
`;
export const Message = styled.div`
  max-width: 400px;
  font-weight: 800;
  font-size: 42px;
  color: #fff;
  line-height: 1.2em;
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
