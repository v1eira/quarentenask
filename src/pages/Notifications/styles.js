import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  z-index: 1;
  background: #000;

  @media (max-width: 450px) {
    height: calc(100vh - 53px);
  }
`;

export const Content = styled.div`
  width: 680px;
  min-height: calc(100vh - 83px);
  margin: 68px auto 0;

  display: flex;
  flex-direction: column;

  border-right: 1px solid #333;
  border-left: 1px solid #333;

  @media (max-width: 700px) {
    border: none;
    width: 100%;
    margin: 68px 0 0;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
