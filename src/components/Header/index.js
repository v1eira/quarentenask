import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaHome,
  FaSearch,
  FaHandHoldingHeart,
  FaUser,
  FaPowerOff,
} from 'react-icons/fa';

import { Container, NavigationIcons, NavButton, LogoutButton } from './styles';

export default function Home() {
  return (
    <Container>
      <Link to="/home">QuarentenAsk</Link>
      <NavigationIcons>
        <NavButton>
          <FaHome size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton>
          <FaSearch size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton>
          <FaHandHoldingHeart size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton>
          <FaUser size={30} color="#fff" opacity={0.8} />
        </NavButton>
      </NavigationIcons>
      <LogoutButton>
        <FaPowerOff size={30} color="#fff" opacity={0.8} />
      </LogoutButton>
    </Container>
  );
}
