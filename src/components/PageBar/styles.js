import styled from 'styled-components';

export const Content = styled.div`
  width: 680px;
  height: 50px;
  position: fixed;
  z-index: 1;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.background};

  button {
    margin: 0 20px;
  }
`;

export const GoBackButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  color: ${(props) => props.theme.colors.icon};

  width: 40px;
  height: 40px;
  border-radius: 20px;

  transition: 0.2s background;

  &:hover {
    background: ${(props) => props.theme.colors.card};
  }
`;

export const PageName = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 22px;
  font-weight: bold;
`;

export const BarWrapper = styled.div`
  height: 52px;
`;
