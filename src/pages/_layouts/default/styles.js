import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  z-index: 1;

  background: ${(props) => props.theme.colors.background};

  @media (max-width: 450px) {
    height: calc(100vh - 53px);
  }
`;
