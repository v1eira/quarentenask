import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaKey } from 'react-icons/fa';

import Q from '../../assets/quarentenask.svg';

import {
  Wrapper,
  Container,
  AuthForm,
  InputField,
  SubmitButton,
  RedirectText,
} from './styles';

export default function SignIn() {
  const history = useHistory();

  return (
    <Wrapper>
      <Container>
        <img src={Q} alt="img" />
        <AuthForm>
          <InputField>
            <FaEnvelope size={20} />
            <input type="email" name="email" placeholder="email@email.com" />
          </InputField>
          <InputField>
            <FaKey size={20} />
            <input type="password" name="password" placeholder="******" />
          </InputField>
          <SubmitButton
            type="submit"
            onClick={() => {
              history.push('/home');
            }}
          >
            <span>Entrar</span>
          </SubmitButton>
        </AuthForm>
        <Link to="/signup">
          <RedirectText>Cadastre-se</RedirectText>
        </Link>
      </Container>
    </Wrapper>
  );
}
