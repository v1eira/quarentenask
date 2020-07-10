import React from 'react';
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
    if (path !== window.location.pathname) {
      history.push(path);
    }
  }

  const same = (id) => {
    return id === window.location.pathname.slice(1);
  };

  return (
    <Container>
      <Link to="/home">QuarentenAsk</Link>
      <NavigationButtons>
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
          <FaEnvelope
            size={30}
            className={`${same('inbox') ? 'focused' : ''}`}
          />
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
