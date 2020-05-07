import React from 'react';
// import { Link } from 'react-router-dom';

import { FaHome, FaSearch, FaHandHoldingHeart, FaUser } from 'react-icons/fa';
// import { RiHeartsLine } from 'react-icons/ri';

import { Container, NavButton } from './styles';

export default function Home() {
  return (
    <Container>
      <NavButton>
        <FaHome size={20} color="#fff" />
        <span>Início</span>
      </NavButton>

      <NavButton>
        <FaSearch size={20} color="#fff" />
        <span>Procurar</span>
      </NavButton>

      <NavButton>
        <FaHandHoldingHeart size={20} color="#fff" />
        <span>Mais curtidas</span>
      </NavButton>

      <NavButton>
        <FaUser size={20} color="#fff" />
        <span>Perfil</span>
      </NavButton>
    </Container>
  );
}
