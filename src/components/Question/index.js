/* eslint-disable jsx-a11y/anchor-is-valid */
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

  function handleClick(e, path) {
    e.preventDefault();
    history.push(path);
    e.stopPropagation();
  }

  return (
    <Container onClick={(e) => handleClick(e, '/question')}>
      <QuestionInfo>
        <Link onClick={(e) => handleClick(e, '/home')}>
          <img
            src="https://pbs.twimg.com/profile_images/1262866049369702401/XPHCijRZ_400x400.jpg"
            alt="img"
          />
        </Link>
        <QuestionContent>
          <UserInfo>
            <Link onClick={(e) => handleClick(e, '/home')}>
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
            <Link onClick={(e) => handleClick(e, '/profile')}>
              <Name>V.</Name>
              <User>@v1eira</User>
              <span>-</span>
              <Time>Agora</Time>
            </Link>
          </UserInfo>
          <AnswerText>Po, maluco brabo d+. Toca muito!</AnswerText>
          <Likes>
            <Link onClick={(e) => handleClick(e, '/home')}>
              <FaRegHeart color="#666" />
            </Link>
            <Link onClick={(e) => handleClick(e, '/home')}>
              <Count>14</Count>
            </Link>
          </Likes>
        </AnswerContent>
        <Link onClick={(e) => handleClick(e, '/profile')}>
          <img
            src="https://pbs.twimg.com/profile_images/1236710786061524994/JcWN0IOE_400x400.jpg"
            alt="img"
          />
        </Link>
      </AnswerInfo>
    </Container>
  );
}
