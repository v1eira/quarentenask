import React from 'react';

import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

import Header from '../../components/Header';

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

function SingleQuestion() {
  return (
    <Wrapper>
      <Header />

      <Content>
        <Container>
          <Section>
            <Info>
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
                <Link to="/question">
                  <FaRegHeart color="#666" />
                </Link>
                <Link to="/question">
                  <Count>14 Curtidas</Count>
                </Link>
              </Likes>
            </AnswerFooter>
          </Section>
        </Container>
      </Content>
    </Wrapper>
  );
}

export default SingleQuestion;
