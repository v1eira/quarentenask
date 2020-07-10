import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 10px 20px;
  margin: 0 !important;

  transition: 0.2s background-color;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.title === 'dark'
        ? lighten(0.08, props.theme.colors.background)
        : darken(0.08, props.theme.colors.background)};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Name = styled.span`
  color: ${(props) => props.theme.colors.text} !important;
  font-weight: bold;
`;

export const User = styled.span`
  color: ${(props) => props.theme.colors.quaternary} !important;
  font-weight: normal !important;
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
