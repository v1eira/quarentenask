import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FaHome,
  FaSearch,
  FaChartLine,
  FaUser,
  FaBell,
  FaEnvelope,
} from 'react-icons/fa';

import { Container, NavButton, Badge } from './styles';

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
      case '/search':
        document.getElementById('bottom-search-btn').classList.add('focused');
        break;
      case '/trending':
        document.getElementById('bottom-trending-btn').classList.add('focused');
        break;
      case '/profile':
        document.getElementById('bottom-profile-btn').classList.add('focused');
        break;
      case '/notifications':
        document
          .getElementById('bottom-notification-btn')
          .classList.add('focused');
        break;
      case '/inbox':
        document.getElementById('bottom-inbox-btn').classList.add('focused');
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

      <NavButton
        onClick={() => {
          navigateTo('/search');
        }}
      >
        <FaSearch id="bottom-search-btn" />
      </NavButton>

      <NavButton
        onClick={() => {
          navigateTo('/trending');
        }}
      >
        <FaChartLine id="bottom-trending-btn" />
      </NavButton>

      <Badge
        hasUnread
        content="10"
        onClick={() => {
          navigateTo('/inbox');
        }}
      >
        <FaEnvelope id="bottom-inbox-btn" />
      </Badge>

      <Badge
        hasUnread
        content="10"
        onClick={() => {
          navigateTo('/notifications');
        }}
      >
        <FaBell id="bottom-notification-btn" />
      </Badge>

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
