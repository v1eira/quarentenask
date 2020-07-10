import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.li`
  width: 630px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.card};
  padding: 10px 25px;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:hover {
    background: ${(props) =>
      props.theme.title === 'dark'
        ? lighten(0.02, props.theme.colors.card)
        : props.theme.colors.item};
  }

  @media (max-width: 700px) {
    width: calc(100% - 50px);
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    width: 80vw;
    margin: 0 5%;
  }
`;

export const LeftSide = styled.div`
  svg {
    font-size: 20px;
    color: ${(props) => props.theme.colors.icon};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 25px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const UserTag = styled.a`
  margin-left: 12px;

  cursor: pointer;
  outline: none;
  text-decoration: none;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;
export const Message = styled.span`
  margin-top: 8px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const Name = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;
