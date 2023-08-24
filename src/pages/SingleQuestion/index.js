/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

import PageBar from '../../components/PageBar';
import UserListModal from '../../components/UserListModal';

import {
  Content,
  Container,
  Section,
  Info,
  QuestionContent,
  AnswerContent,
  Name,
  QuestionText,
  AnswerText,
  UserInfo,
  User,
  AnswerUser,
  Time,
  AnswerTime,
  Likes,
  Count,
  Separator,
  AnswerFooter,
} from './styles';

export default function SingleQuestion() {
  function openModal(e, id) {
    e.preventDefault();
    document.getElementById(id).style.display = 'block';
    e.stopPropagation();
  }

  return (
    <Content>
      <PageBar name="Pergunta" />
      <Container>
        <Section>
          <Info>
            <Link to="/home">
              <img
                src="https://pbs.twimg.com/profile_images/1579423064244330496/bvbCtf-K_400x400.jpg"
                alt="img"
              />
            </Link>
            <QuestionContent>
              <UserInfo>
                <Link to="/home">
                  <Name>Jana</Name>
                  <User>@janainassevero</User>
                </Link>
              </UserInfo>
              <QuestionText>O que você acha do Cobus?</QuestionText>
            </QuestionContent>
          </Info>
          <Time>8:36 PM · 31 de mar de 2020</Time>
        </Section>

        <Separator />

        <Section>
          <Info>
            <AnswerContent>
              <UserInfo>
                <Link to="/profile">
                  <Name>V.</Name>
                  <AnswerUser>@v1eira</AnswerUser>
                </Link>
              </UserInfo>
              <AnswerText>Po, maluco brabo d+. Toca muito!</AnswerText>
            </AnswerContent>
            <Link to="/profile">
              <img
                src="https://pbs.twimg.com/profile_images/1691291409695825920/fYLa7FB9_400x400.jpg"
                alt="img"
              />
            </Link>
          </Info>
          <AnswerFooter>
            <AnswerTime>17:28 PM · 01 de abr de 2020</AnswerTime>
            <span>-</span>
            <Likes>
              <Link className="heart" to="/question">
                <FaRegHeart color="#666" />
              </Link>
              <Count onClick={(e) => openModal(e, 'likes')}>14 Curtidas</Count>
              <UserListModal name="Curtidas" id="likes" />
            </Likes>
          </AnswerFooter>
        </Section>
      </Container>
    </Content>
  );
}
