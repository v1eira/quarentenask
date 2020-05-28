import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaHeart,
} from 'react-icons/fa';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import Header from '../../components/Header';
import PageBar from '../../components/PageBar';
import TimeLine from '../../components/TimeLine';

import {
  Wrapper,
  UserProfile,
  Content,
  ProfileInfo,
  Images,
  NameAndUser,
  EditButton,
  SocialMedia,
  ProfileInfoItem,
  Stats,
  Following,
  Followers,
  FollowButton,
  Question,
  QuestionButton,
  TimelineSelector,
} from './styles';

export default function Profile() {
  changeAddressBarColor('#000');

  function pushFocusedClass(id) {
    const ids = ['respostas', 'perguntas', 'curtidas'];

    const e = document.getElementById(id);
    e.classList.add('focused');

    for (let i = 0; i < ids.length; i += 1) {
      if (ids[i] !== id) {
        const el = document.getElementById(ids[i]);
        if (el.classList.length > 0) el.classList.remove('focused');
      }
    }
  }

  return (
    <Wrapper>
      <Header />

      <UserProfile>
        <PageBar name="Perfil" />
        <Images>
          <img
            src="https://pbs.twimg.com/profile_banners/1103890260205887488/1552027687/1500x500"
            alt="cover"
          />
          <img
            src="https://pbs.twimg.com/profile_images/1236710786061524994/JcWN0IOE_400x400.jpg"
            alt="profile"
          />
        </Images>
        <Content>
          <ProfileInfo>
            <NameAndUser>
              <span>Ewerson Vieira</span>
              <span>-</span>
              <span>@v1eira</span>
              <EditButton>
                <span>Editar perfil</span>
              </EditButton>
            </NameAndUser>
            <SocialMedia>
              <FaInstagram size={20} />
              <a
                href="https://instagram.com/v1eira"
                target="_blank"
                rel="noopener noreferrer"
              >
                @v1eira
              </a>
            </SocialMedia>
            <SocialMedia>
              <FaTwitter size={20} />
              <a
                href="https://twitter.com/v1eiran"
                target="_blank"
                rel="noopener noreferrer"
              >
                @v1eiran
              </a>
            </SocialMedia>
            <ProfileInfoItem>
              <FaBirthdayCake size={20} />
              <span>31/01/1996</span>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <FaMapMarkerAlt size={20} />
              <span>Vila Velha, Brasil</span>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <FaRegCalendarAlt size={20} />
              <span>Desde maio de 2020</span>
            </ProfileInfoItem>
            <Stats>
              <Following>
                <Link to="/profile">
                  <span>seguindo</span>
                  <span>10</span>
                </Link>
              </Following>
              <Followers>
                <Link to="/profile">
                  <span>100</span>
                  <span>seguidores</span>
                </Link>
              </Followers>
              <FollowButton>
                <FaHeart size={20} color="#999" />
                <span>Seguir</span>
              </FollowButton>
            </Stats>
            <Question>
              <textarea
                name="question"
                id="question"
                rows="3"
                placeholder="Faça-me uma pergunta"
              />
              <QuestionButton>
                <span>Enviar</span>
              </QuestionButton>
            </Question>
          </ProfileInfo>

          <TimelineSelector>
            <Link
              to="/profile"
              className="focused"
              onClick={() => pushFocusedClass('respostas')}
              id="respostas"
            >
              <span>Respostas</span>
            </Link>
            <Link
              to="/profile"
              onClick={() => pushFocusedClass('perguntas')}
              id="perguntas"
            >
              <span>Perguntas</span>
            </Link>
            <Link
              to="/profile"
              onClick={() => pushFocusedClass('curtidas')}
              id="curtidas"
            >
              <span>Curtidas</span>
            </Link>
          </TimelineSelector>

          <TimeLine />
        </Content>
      </UserProfile>
    </Wrapper>
  );
}
