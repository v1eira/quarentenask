import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.li`
  background: #141419;
  width: 640px;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;

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

  &:hover {
    background: ${lighten(0.02, '#141419')};
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
    color: #333;
  }

  @media (max-width: 400px) {
    align-self: flex-start;
  }
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  &:hover {
    opacity: 0.9;
    text-decoration: underline;
  }
`;

export const User = styled.span`
  font-size: 14px;
  color: #999;
  margin: 0 10px 0 10px;
`;

export const Time = styled.span`
  font-size: 14px;
  color: #999;
  margin-left: 10px;
`;

export const QuestionText = styled.span`
  font-size: 16px;
  color: #fff;

  @media (max-width: 950px) {
    max-width: 50vw;
  }
`;

export const Separator = styled.div`
  margin: 5px 0 10px;
  border-top: 1px solid #555;

  @media (max-width: 400px) {
    margin: 15px 0;
  }
`;

export const AnswerInfo = styled.div`
  display: flex;
  align-items: center;

  a {
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const AnswerContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 15px;

  > span {
    margin-top: 5px;
  }
`;

export const AnswerText = styled.span`
  font-size: 16px;
  color: #fff;

  @media (max-width: 950px) {
    max-width: 50vw;
  }

  @media (max-width: 400px) {
    align-self: flex-start;
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  a {
    text-decoration: none;
  }

  .heart {
    svg {
      transition: 0.2s color;
      &:hover {
        color: red !important;
      }
    }
  }

  @media (max-width: 400px) {
    align-self: flex-start;
  }
`;

export const Count = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: #999;

  &:hover {
    opacity: 0.9;
    text-decoration: underline;
  }
`;
