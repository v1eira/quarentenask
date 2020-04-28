import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaKey } from 'react-icons/fa';

import Q from '../../assets/quarentenask.svg';

import {
  Wrapper,
  Container,
  InputField,
  SubmitButton,
  Register,
} from './styles';

export default function SignIn() {
  return (
    <Wrapper>
      <Container>
        <img src={Q} alt="img" />
        <InputField>
          <FaEnvelope size={20} />
          <input type="email" name="email" placeholder="email@email.com" />
        </InputField>
        <InputField>
          <FaKey size={20} />
          <input type="password" name="password" placeholder="******" />
        </InputField>
        <SubmitButton type="submit">
          <span>Entrar</span>
        </SubmitButton>
        <Link to="/register">
          <Register>Criar conta</Register>
        </Link>
      </Container>
    </Wrapper>
  );
}
