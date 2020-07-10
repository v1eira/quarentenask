import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  padding: 10px;

  background: #fff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 160px;
    height: 160px;
    padding: 30px;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    width: 80vw;

    img {
      width: 26.5vw;
      height: 26.5vw;
    }
  }
`;

export const AuthForm = styled.div`
  div {
    margin-bottom: 15px;
  }

  button {
    margin: 20px 0;
  }
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;

  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #000;
    height: 40px;
    padding: 0 20px;
    color: #000;
    outline: none;

    &::placeholder {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const SubmitButton = styled.button`
  width: 250px;
  height: 44px;
  cursor: pointer;
  outline: none;

  background: #fff;
  color: #fff;
  border: 1px solid #16161c;
  border-radius: 22px;

  transition: background 0.2s;

  &:hover {
    background: #16161c;
    span {
      color: #fff;
    }
  }

  span {
    color: #16161c;
    font-size: 16px;
    font-weight: bold;

    transition: color 0.2s;
  }
`;

export const RedirectText = styled.span`
  color: #16161c;

  &:hover {
    text-decoration: underline;
  }
`;
