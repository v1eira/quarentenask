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

  background: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  a {
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.headerButton};
    opacity: 0.6;

    transition: 0.2s opacity;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 450px) {
    display: none;
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
    color: ${(props) => props.theme.colors.headerButton};
    opacity: 0.5;

    transition: 0.2s opacity;
  }

  .focused {
    opacity: 1;
  }

  &:hover {
    background: ${(props) =>
      lighten(0.05, props.theme.colors.headerButtonHover)};

    svg {
      opacity: 1;
    }
  }
`;

export const Badge = styled(NavButton)`
  position: relative;

  &::after {
    display: ${(props) => (props.hasUnread ? 'block' : 'none')};
    top: 8px;
    right: 8px;
    position: absolute;
    width: 19px;
    background: #ff892e;
    content: '${(props) => props.content}';
    font-size: 10px;
    font-weight: bold;
    padding: 4px 0;
    color: #fff;
    border-radius: 50%;
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
