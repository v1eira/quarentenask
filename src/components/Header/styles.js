import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  width: calc(100% - 40px);
  height: 27px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  background: #000;
  border-bottom: 1px solid #333;

  a {
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    opacity: 0.5;

    transition: 0.2s opacity;

    &:hover {
      opacity: 1;
    }
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;

  button + button {
    margin-left: 10px;
  }
`;

export const NavButton = styled.button`
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 30px;
  background: transparent;
  cursor: pointer;
  outline: none;

  transition: 0.2s background;

  svg {
    margin: 0;
    padding: 0;
    font-size: 30px;
    color: #fff;
    opacity: 0.5;

    transition: 0.2s opacity;
  }

  .focused {
    background: ${lighten(0.05, '#000')};
    opacity: 1;
  }

  &:hover {
    background: ${lighten(0.05, '#000')};

    svg {
      opacity: 1;
    }
  }
`;

export const LogoutButton = styled(NavButton)`
  svg {
    transition: 0.2s color;
  }
  &:hover {
    background: transparent;
    svg {
      opacity: 1;
    }
  }
`;
