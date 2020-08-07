import styled from 'styled-components';

export const Content = styled.div`
  width: 680px;
  margin: 68px auto 0;
  height: calc(100% - 68px);

  display: flex;
  flex-direction: column;

  border-right: 1px solid ${(props) => props.theme.colors.border};
  border-left: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: 700px) {
    border: none;
    width: 100%;
    margin: 68px 0 0;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

export const Container = styled.li`
  background: ${(props) => props.theme.colors.card};
  border-bottom: 1px solid
    ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.border
        : 'transparent'};
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
    color: ${(props) => props.theme.colors.secondary};
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
  margin: 0 10px;
`;

export const AnswerUser = styled(User)`
  margin: 0 0 0 10px;
`;

export const Time = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.tertiary};
  margin-left: 10px;
`;

export const AnswerTime = styled(Time)`
  align-self: flex-end;
  margin-left: 0;
  margin-right: 10px;
`;

export const QuestionText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`;

export const Separator = styled.div`
  margin: 5px 0 10px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

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
  color: ${(props) => props.theme.colors.text};

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

export const Count = styled.a`
  cursor: pointer;
  margin-left: 5px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.tertiary};
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

  color: ${(props) => props.theme.colors.tertiary};
`;
