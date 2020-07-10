import React from 'react';
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

  const same = (id) => {
    return id === window.location.pathname.slice(1);
  };

  return (
    <Container>
      <NavButton
        onClick={() => {
          navigateTo('/home');
        }}
      >
        <FaHome className={`${same('home') ? 'focused' : ''}`} />
      </NavButton>

      <NavButton
        onClick={() => {
          navigateTo('/search');
        }}
      >
        <FaSearch className={`${same('search') ? 'focused' : ''}`} />
      </NavButton>

      <NavButton
        onClick={() => {
          navigateTo('/trending');
        }}
      >
        <FaChartLine className={`${same('trending') ? 'focused' : ''}`} />
      </NavButton>

      <Badge
        hasUnread
        content="10"
        onClick={() => {
          navigateTo('/inbox');
        }}
      >
        <FaEnvelope className={`${same('inbox') ? 'focused' : ''}`} />
      </Badge>

      <Badge
        hasUnread
        content="10"
        onClick={() => {
          navigateTo('/notifications');
        }}
      >
        <FaBell className={`${same('notifications') ? 'focused' : ''}`} />
      </Badge>

      <NavButton
        onClick={() => {
          navigateTo('/profile');
        }}
      >
        <FaUser className={`${same('profile') ? 'focused' : ''}`} />
      </NavButton>
    </Container>
  );
}
