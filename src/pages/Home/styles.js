import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 68px 0 20px;

  @media (max-width: 450px) {
    margin: 0 0 20px;
  }
`;

export const TopBar = styled.div`
  position: fixed;
  z-index: 1;
  width: 670px;
  padding: 12px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.background};

  span {
    color: ${(props) => props.theme.colors.text};
  }

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
