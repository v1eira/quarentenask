import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  FaHome,
  FaSearch,
  FaChartLine,
  FaUser,
  FaPowerOff,
  FaBell,
  FaEnvelope,
} from 'react-icons/fa';

import {
  Container,
  NavigationButtons,
  NavButton,
  Badge,
  LogoutButton,
} from './styles';

export default function Header() {
  const history = useHistory();

  function navigateTo(path) {
    if (window.location.pathname !== path) {
      history.push(path);
    }
  }

  function highlightPageButton() {
    switch (window.location.pathname) {
      case '/home':
        document.getElementById('home-button').classList.add('focused');
        break;
      case '/search':
        document.getElementById('search-button').classList.add('focused');
        break;
      case '/trending':
        document.getElementById('trending-button').classList.add('focused');
        break;
      case '/profile':
        document.getElementById('profile-button').classList.add('focused');
        break;
      case '/notifications':
        document.getElementById('notification-button').classList.add('focused');
        break;
      case '/inbox':
        document.getElementById('inbox-button').classList.add('focused');
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    highlightPageButton();
  });

  return (
    <Container>
      <Link to="/home">QuarentenAsk</Link>
      <NavigationButtons>
        <NavButton
          onClick={() => {
            navigateTo('/home');
          }}
        >
          <FaHome id="home-button" />
        </NavButton>

        <NavButton
          onClick={() => {
            navigateTo('/search');
          }}
        >
          <FaSearch id="search-button" />
        </NavButton>

        <NavButton
          onClick={() => {
            navigateTo('/trending');
          }}
        >
          <FaChartLine id="trending-button" />
        </NavButton>

        <Badge
          hasUnread
          content="10"
          onClick={() => {
            navigateTo('/inbox');
          }}
        >
          <FaEnvelope size={30} id="inbox-button" />
        </Badge>

        <Badge
          hasUnread
          content="10"
          onClick={() => {
            navigateTo('/notifications');
          }}
        >
          <FaBell id="notification-button" />
        </Badge>

        <NavButton
          onClick={() => {
            navigateTo('/profile');
          }}
        >
          <FaUser id="profile-button" />
        </NavButton>
      </NavigationButtons>
      <LogoutButton
        onClick={() => {
          navigateTo('/');
        }}
      >
        <FaPowerOff />
      </LogoutButton>
    </Container>
  );
}
