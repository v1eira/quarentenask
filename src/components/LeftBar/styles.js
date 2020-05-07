import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;

  button + button {
    margin-top: 5px;
  }
`;

export const NavButton = styled.button`
  width: 240px;
  padding: 15px;
  border: 0;
  border-radius: 120px;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;

  span {
    color: #fefefe;
    font-size: 20px;
    font-weight: bold;
  }

  svg + span {
    margin-left: 15px;
  }

  &:hover {
    background: ${lighten(0.05, '#000')};
    span {
      color: #fff;
    }
  }
`;
