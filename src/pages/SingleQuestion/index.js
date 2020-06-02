/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import Header from '../../components/Header';
import PageBar from '../../components/PageBar';
import UserListModal from '../../components/UserListModal';

import {
  Wrapper,
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
  changeAddressBarColor('#000');

  function openModal(e) {
    e.preventDefault();
    document.getElementById('user-list-modal').style.display = 'block';
    e.stopPropagation();
  }

  return (
    <Wrapper>
      <Header />

      <Content>
        <PageBar name="Pergunta" />
        <Container>
          <Section>
            <Info>
              <Link to="/home">
                <img
                  src="https://api.adorable.io/avatars/285/abott@adorablb.png"
                  alt="img"
                />
              </Link>
              <QuestionContent>
                <UserInfo>
                  <Link to="/home">
                    <Name>Bellatrix</Name>
                    <User>@anab_leao</User>
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
                  src="https://pbs.twimg.com/profile_images/1236710786061524994/JcWN0IOE_400x400.jpg"
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
                <Link id="likesList" onClick={(e) => openModal(e)}>
                  <Count>14 Curtidas</Count>
                </Link>
                <UserListModal />
              </Likes>
            </AnswerFooter>
          </Section>
        </Container>
      </Content>
    </Wrapper>
  );
}
