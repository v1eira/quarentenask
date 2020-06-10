import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: calc(100% - 53px);
  width: 100%;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;

  background: #000;
  border-top: 1px solid #333;

  @media (min-width: 451px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  border: none;
  margin: 0;
  padding: 5px;
  background: transparent;
  cursor: pointer;
  outline: none;

  transition: 0.2s background;

  svg {
    margin: 0;
    padding: 0;
    font-size: 25px;
    color: #fff;
    opacity: 0.5;

    transition: 0.2s opacity;
  }

  .focused {
    opacity: 1;
  }
`;

export const Badge = styled(NavButton)`
  position: relative;

  svg {
    font-size: 22px;
  }

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        top: 0;
        right: 0;
        position: absolute;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;
