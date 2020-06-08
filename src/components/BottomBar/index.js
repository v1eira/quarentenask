import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FaHome, FaSearch, FaChartLine, FaUser } from 'react-icons/fa';

import { Container, NavButton } from './styles';

export default function BottomBar() {
  const history = useHistory();

  function navigateTo(path) {
    if (window.location.pathname !== path) {
      history.push(path);
    }
  }

  function highlightPageButton() {
    switch (window.location.pathname) {
      case '/home':
        document.getElementById('bottom-home-btn').classList.add('focused');
        break;
      case '/trending':
        document.getElementById('bottom-trending-btn').classList.add('focused');
        break;
      case '/profile':
        document.getElementById('bottom-profile-btn').classList.add('focused');
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
      <NavButton
        onClick={() => {
          navigateTo('/home');
        }}
      >
        <FaHome id="bottom-home-btn" />
      </NavButton>

      <NavButton id="search-button">
        <FaSearch />
      </NavButton>

      <NavButton
        onClick={() => {
          navigateTo('/trending');
        }}
      >
        <FaChartLine id="bottom-trending-btn" />
      </NavButton>

      <NavButton
        onClick={() => {
          navigateTo('/profile');
        }}
      >
        <FaUser id="bottom-profile-btn" />
      </NavButton>
    </Container>
  );
}
