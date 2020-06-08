import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: calc(100% - 48px);
  width: 100%;
  height: 48px;

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
  padding: 0;
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
    opacity: 1;
  }

  &:hover {
    background: ${lighten(0.05, '#000')};

    svg {
      opacity: 1;
    }
  }
`;
