import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 620px;

  background-color: ${(props) => props.theme.colors.item};
  border: none;
  border-radius: 12px;
  padding: 20px;

  transition: 0.2s background-color;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &:hover {
    background: ${(props) => lighten(0.02, props.theme.colors.item)};
  }

  @media (max-width: 700px) {
    width: calc(80vw - 20px);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Name = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
`;

export const User = styled.span`
  color: ${(props) => props.theme.colors.quaternary};
`;

export const Follow = styled.button`
  cursor: pointer;
  margin-left: auto;
  border: none;
  background: transparent;
  text-align: center;
  padding-bottom: 2px;

  color: ${(props) => props.theme.colors.quaternary};
  font-size: 15px;
  font-weight: bold;
  outline: none;

  width: 80px;
  height: 30px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme.colors.noFocus};

  transition: 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;
