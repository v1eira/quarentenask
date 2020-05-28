import React from 'react';
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

  return (
    <Container>
      <Link to="/home">QuarentenAsk</Link>
      <NavigationButtons>
        <NavButton
          onClick={() => {
            navigateTo('/home');
          }}
        >
          <FaHome size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton>
          <FaSearch size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton
          onClick={() => {
            navigateTo('/trending');
          }}
        >
          <FaChartLine size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton
          onClick={() => {
            navigateTo('/profile');
          }}
        >
          <FaUser size={30} color="#fff" opacity={0.8} />
        </NavButton>
      </NavigationButtons>
      <LogoutButton
        onClick={() => {
          navigateTo('/');
        }}
      >
        <FaPowerOff size={30} color="#fff" opacity={0.8} />
      </LogoutButton>
    </Container>
  );
}
