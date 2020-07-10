import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.li`
  background: ${(props) => props.theme.colors.card};
  width: 640px;
  border-radius: 12px;
  padding: 10px;

  box-shadow: ${(props) =>
    props.theme.title === 'light' ? '0px 2px 8px -1px #999' : ''};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: 0.2s background;

  span {
    word-wrap: break-word;
  }

  .user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 5px;
  }

  @media (max-width: 800px) {
    width: 80vw;
  }
`;

export const QuestionInfo = styled.div`
  display: flex;
  align-items: center;

  a {
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const QuestionContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 15px;

  > span {
    margin-top: 5px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.tertiary};
  }

  @media (max-width: 400px) {
    align-self: flex-start;
  }
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    opacity: 0.9;
    text-decoration: underline;
  }
`;

export const User = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.tertiary};
  margin: 0 10px 0 10px;
`;

export const Time = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.tertiary};
  margin-left: 10px;
`;

export const QuestionText = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 950px) {
    max-width: 50vw;
  }
`;

export const Separator = styled.div`
  margin: 5px 0 10px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: 400px) {
    margin: 15px 0;
  }
`;

export const AnswerInfo = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.icon};
    transition: 0.2s color;
    font-size: 25px;
    margin-left: 10px;

    svg {
      padding: 5px;
    }

    &:hover {
      color: ${(props) =>
        props.theme.title === 'dark'
          ? darken(0.3, props.theme.colors.icon)
          : lighten(0.3, props.theme.colors.icon)};
    }
  }
`;

export const AnswerContent = styled.textarea`
  outline: none;
  border: none;
  width: 100%;
  background: ${(props) =>
    props.theme.title === 'dark'
      ? lighten(0.03, props.theme.colors.card)
      : props.theme.colors.item};
  border-radius: 12px;
  color: ${(props) => props.theme.colors.text};
  resize: none;
  padding: 5px 20px 35px;
  overflow: auto;

  span {
    word-wrap: break-word;
  }
`;
