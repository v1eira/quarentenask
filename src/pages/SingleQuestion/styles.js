import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  z-index: 1;

  background: #000;
`;

export const Content = styled.div`
  width: 680px;
  margin: 68px auto 0;
  height: calc(100% - 68px);

  display: flex;
  flex-direction: column;

  border-right: 1px solid #333;
  border-left: 1px solid #333;

  @media (max-width: 700px) {
    border: none;
    width: 100%;
    margin: 68px 0 0;
  }
`;

export const Container = styled.li`
  background: #141419;
  width: calc(100% - 20px);
  padding: 15px 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    word-wrap: break-word;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  a {
    &:hover {
      opacity: 0.9;
    }
  }

  img {
    min-width: 75px;
    width: 75px;
    min-height: 75px;
    height: 75px;
    border-radius: 50%;
    padding: 5px;
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
  margin: 0 10px;
`;

export const AnswerUser = styled(User)`
  margin: 0 0 0 10px;
`;

export const Time = styled.span`
  font-size: 14px;
  color: #999;
  margin-left: 10px;
`;

export const AnswerTime = styled(Time)`
  align-self: flex-end;
  margin-left: 0;
  margin-right: 10px;
`;

export const QuestionText = styled.span`
  font-size: 18px;
  color: #fff;
`;

export const Separator = styled.div`
  margin: 5px 0 10px;
  border-top: 1px solid #555;

  @media (max-width: 400px) {
    margin: 15px 0;
  }
`;

export const AnswerContent = styled(QuestionContent)`
  align-items: flex-end;
  margin: 0 15px 0 10px;
`;

export const AnswerText = styled.span`
  font-size: 18px;
  color: #fff;

  @media (max-width: 400px) {
    align-self: flex-start;
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  a {
    text-decoration: none;
    height: 16px;
  }

  svg {
    transition: 0.2s color;
    &:hover {
      color: red !important;
    }
  }

  @media (max-width: 400px) {
    align-self: flex-start;
  }
`;

export const Count = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: #999;
  word-spacing: 3px;

  &:hover {
    opacity: 0.9;
    text-decoration: underline;
  }
`;

export const AnswerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 5px;

  color: #999;
`;
