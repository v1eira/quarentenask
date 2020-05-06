import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
} from 'react-icons/fa';

import TimeLine from '../../components/TimeLine';

import {
  Wrapper,
  Header,
  Profile,
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
  Message,
  TimelineSelector,
} from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <Link to="/home">QuarentenAsk</Link>
      </Header>

      <Profile>
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
            <Message>
              <span>Descrição</span>
            </Message>
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
            </Stats>
          </ProfileInfo>

          <TimelineSelector>
            <Link to="/profile">
              <span>Respostas</span>
            </Link>
            <Link to="/profile">
              <span>Perguntas</span>
            </Link>
            <Link to="/profile">
              <span>Curtidas</span>
            </Link>
          </TimelineSelector>

          <TimeLine />
        </Content>
      </Profile>
    </Wrapper>
  );
}
