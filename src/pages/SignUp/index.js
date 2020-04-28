import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaKey, FaAt, FaUser } from 'react-icons/fa';

import Q from '../../assets/quarentenask.svg';

import {
  Wrapper,
  Container,
  AuthForm,
  InputField,
  SubmitButton,
  RedirectText,
} from './styles';

export default function SignUp() {
  return (
    <Wrapper>
      <Container>
        <img src={Q} alt="img" />
        <AuthForm>
          <InputField>
            <FaUser size={20} />
            <input type="text" name="name" placeholder="Seu nome" />
          </InputField>
          <InputField>
            <FaAt size={20} />
            <input type="text" name="username" placeholder="Nome de usuário" />
          </InputField>
          <InputField>
            <FaEnvelope size={20} />
            <input type="email" name="email" placeholder="email@email.com" />
          </InputField>
          <InputField>
            <FaKey size={20} />
            <input type="password" name="password" placeholder="Senha" />
          </InputField>
          <InputField>
            <FaKey size={20} />
            <input
              type="password"
              name="password"
              placeholder="Confirme sua senha"
            />
          </InputField>
          <SubmitButton type="submit">
            <span>Cadastrar</span>
          </SubmitButton>
        </AuthForm>
        <Link to="/">
          <RedirectText>Já possui cadastro?</RedirectText>
        </Link>
      </Container>
    </Wrapper>
  );
}
