/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

import UserListModal from '../UserListModal';

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
  function openModal(e, id) {
    e.preventDefault();
    document.getElementById(id).style.display = 'block';
    e.stopPropagation();
  }

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
            src="https://static.vecteezy.com/system/resources/thumbnails/019/896/012/small_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="img"
            className="user-img"
          />
        </Link>
        <QuestionContent>
          <UserInfo>
            <Link onClick={(e) => handleClick(e, '/home')}>
              <Name>Jana</Name>
              <User>@janainassevero</User>
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
            <Link className="heart" onClick={(e) => handleClick(e, '/home')}>
              <FaRegHeart color="#666" />
            </Link>
            <Link>
              <Count onClick={(e) => openModal(e, 'likes')}>14</Count>
            </Link>
            <UserListModal name="Curtidas" id="likes" />
          </Likes>
        </AnswerContent>
        <Link onClick={(e) => handleClick(e, '/profile')}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="img"
            className="user-img"
          />
        </Link>
      </AnswerInfo>
    </Container>
  );
}
