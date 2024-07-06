/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdSend } from 'react-icons/md';

import {
  Container,
  QuestionInfo,
  AnswerInfo,
  QuestionContent,
  AnswerContent,
  Name,
  QuestionText,
  UserInfo,
  User,
  Time,
  Separator,
} from './styles';

export default function QuestionReceived() {
  const history = useHistory();

  function handleClick(e, path) {
    e.preventDefault();
    if (path !== window.location.pathname) {
      history.push(path);
    }
    e.stopPropagation();
  }

  return (
    <Container>
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
        <AnswerContent
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
        <Link onClick={(e) => handleClick(e, '/inbox')}>
          <MdSend />
        </Link>
      </AnswerInfo>
    </Container>
  );
}
