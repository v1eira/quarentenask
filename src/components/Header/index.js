import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  FaHome,
  FaSearch,
  FaChartLine,
  FaUser,
  FaPowerOff,
} from 'react-icons/fa';

import {
  Container,
  NavigationButtons,
  NavButton,
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
      case '/trending':
        document.getElementById('trending-button').classList.add('focused');
        break;
      case '/profile':
        document.getElementById('profile-button').classList.add('focused');
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

        <NavButton id="search-button">
          <FaSearch />
        </NavButton>

        <NavButton
          onClick={() => {
            navigateTo('/trending');
          }}
        >
          <FaChartLine id="trending-button" />
        </NavButton>

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
