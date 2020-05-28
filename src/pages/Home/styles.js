import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;

  background: #000;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 68px 0 0;
`;

export const TopBar = styled.div`
  position: fixed;
  z-index: 1;
  width: 660px;
  padding: 12px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;

  @media (max-width: 700px) {
    width: 100vw;
  }
`;

export const Name = styled.span`
  color: white;
  font-size: 22px;
  font-weight: bold;
  margin-left: 15px;
`;

export const Separator = styled.div`
  margin: 35px 0;
`;
