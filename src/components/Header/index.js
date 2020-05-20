import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  FaHome,
  FaSearch,
  FaHandHoldingHeart,
  FaUser,
  FaPowerOff,
} from 'react-icons/fa';

import { Container, NavigationIcons, NavButton, LogoutButton } from './styles';

export default function Home() {
  const history = useHistory();

  return (
    <Container>
      <Link to="/home">QuarentenAsk</Link>
      <NavigationIcons>
        <NavButton
          onClick={() => {
            history.push('/home');
          }}
        >
          <FaHome size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton>
          <FaSearch size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton>
          <FaHandHoldingHeart size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton
          onClick={() => {
            history.push('/profile');
          }}
        >
          <FaUser size={30} color="#fff" opacity={0.8} />
        </NavButton>
      </NavigationIcons>
      <LogoutButton
        onClick={() => {
          history.push('/');
        }}
      >
        <FaPowerOff size={30} color="#fff" opacity={0.8} />
      </LogoutButton>
    </Container>
  );
}
