import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

import {
  Container,
  QuestionInfo,
  AnswerInfo,
  QuestionContent,
  AnswerContent,
  Name,
  QuestionText,
  AnswerText,
  UserInfo,
  User,
  Time,
  Likes,
  Count,
  Separator,
} from './styles';

export default function Question() {
  const history = useHistory();

  return (
    <Container
      onClick={() => {
        history.push('/question');
      }}
    >
      <QuestionInfo>
        <Link to="/home">
          <img
            src="https://pbs.twimg.com/profile_images/1262866049369702401/XPHCijRZ_400x400.jpg"
            alt="img"
          />
        </Link>
        <QuestionContent>
          <UserInfo>
            <Link to="/home">
              <Name>Bellatrix</Name>
              <User>@anab_leao</User>
              <span>-</span>
              <Time>2 h</Time>
            </Link>
          </UserInfo>
          <QuestionText>O que você acha do Cobus?</QuestionText>
        </QuestionContent>
      </QuestionInfo>

      <Separator />

      <AnswerInfo>
        <AnswerContent>
          <UserInfo>
            <Link to="/profile">
              <Name>V.</Name>
              <User>@v1eira</User>
              <span>-</span>
              <Time>Agora</Time>
            </Link>
          </UserInfo>
          <AnswerText>Po, maluco brabo d+. Toca muito!</AnswerText>
          <Likes>
            <Link to="/home">
              <FaRegHeart color="#666" />
            </Link>
            <Link to="/home">
              <Count>14</Count>
            </Link>
          </Likes>
        </AnswerContent>
        <Link to="/profile">
          <img
            src="https://pbs.twimg.com/profile_images/1236710786061524994/JcWN0IOE_400x400.jpg"
            alt="img"
          />
        </Link>
      </AnswerInfo>
    </Container>
  );
}
