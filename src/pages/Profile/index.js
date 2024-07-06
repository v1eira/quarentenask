/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaHeart,
} from 'react-icons/fa';

import PageBar from '../../components/PageBar';
import TimeLine from '../../components/TimeLine';
import EditProfileModal from '../../components/EditProfileModal';
import UserListModal from '../../components/UserListModal';

import {
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
  Selector,
} from './styles';

export default function Profile({ toggleTheme }) {
  function openModal(e, id) {
    e.preventDefault();
    e.stopPropagation();
    switch (id) {
      case 'following':
        document.getElementById(id).style.display = 'block';
        break;
      case 'followers':
        document.getElementById(id).style.display = 'block';
        break;

      default:
        document.getElementById('edit-profile-modal').style.display = 'block';
        break;
    }
  }

  const [focused, setFocused] = useState('respostas');
  const [newFocus, setNewFocus] = useState('respostas');

  useEffect(() => {
    document.getElementById(focused).classList.remove('focused');
    document.getElementById(newFocus).classList.add('focused');
    setFocused(newFocus);
  }, [focused, newFocus]);

  return (
    <UserProfile>
      <PageBar name="Perfil" />
      <Images>
        <img
          src="https://pbs.twimg.com/profile_banners/1103890260205887488/1679068418/600x200"
          alt="cover"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          alt="profile"
        />
      </Images>
      <Content>
        <ProfileInfo>
          <NameAndUser>
            <span>Ewerson Vieira</span>
            <span>-</span>
            <span>@v1eira</span>
            <EditButton onClick={(e) => openModal(e, 'profile')}>
              <span>Editar perfil</span>
            </EditButton>
            <EditProfileModal toggleTheme={toggleTheme} />
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
              <Link onClick={(e) => openModal(e, 'following')}>
                <span>seguindo</span>
                <span className="following-spaced">10</span>
              </Link>
              <UserListModal name="Seguindo" id="following" />
            </Following>
            <Followers className="stats-spaced">
              <Link onClick={(e) => openModal(e, 'followers')}>
                <span>100</span>
                <span className="followers-spaced">seguidores</span>
              </Link>
              <UserListModal name="Seguidores" id="followers" />
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
          <Selector
            to="/profile"
            className="focused"
            onClick={() => setNewFocus('respostas')}
            id="respostas"
          >
            <span>Respostas</span>
          </Selector>
          <Selector
            to="/profile"
            onClick={() => setNewFocus('perguntas')}
            id="perguntas"
          >
            <span>Perguntas</span>
          </Selector>
          <Selector
            to="/profile"
            onClick={() => setNewFocus('curtidas')}
            id="curtidas"
          >
            <span>Curtidas</span>
          </Selector>
        </TimelineSelector>

        <TimeLine />
      </Content>
    </UserProfile>
  );
}

Profile.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
