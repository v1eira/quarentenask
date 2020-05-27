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

export default function Home() {
  const history = useHistory();

  return (
    <Container>
      <Link to="/home">QuarentenAsk</Link>
      <NavigationButtons>
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

        <NavButton
          onClick={() => {
            history.push('/trending');
          }}
        >
          <FaChartLine size={30} color="#fff" opacity={0.8} />
        </NavButton>

        <NavButton
          onClick={() => {
            history.push('/profile');
          }}
        >
          <FaUser size={30} color="#fff" opacity={0.8} />
        </NavButton>
      </NavigationButtons>
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
