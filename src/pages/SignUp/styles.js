import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;

  background: #141419;
`;

export const Container = styled.div`
  margin: auto;
  margin-top: 17.5vh;
  width: 480px;
  height: 65vh;

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
  }

  a {
    text-decoration: none;
    margin-bottom: 25px;
  }

  @media (max-width: 600px) {
    width: 80vw;
  }

  @media (max-height: 800px) {
    height: 80vh;
    margin-top: 10vh;
  }

  @media (max-height: 600px) {
    height: 90vh;
    margin-top: 5vh;
  }

  @media (max-width: 350px) and (max-height: 600px) {
    padding: 10px;
    margin-top: calc(5vh - 10px);
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

    &::placeholder {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const SubmitButton = styled.button`
  width: 250px;
  height: 44px;
  cursor: pointer;

  background: #fff;
  color: #fff;
  border: 1px solid #141419;
  border-radius: 22px;

  transition: background 0.2s;

  &:hover {
    background: #141419;
    span {
      color: #fff;
    }
  }

  span {
    color: #141419;
    font-size: 16px;
    font-weight: bold;

    transition: color 0.2s;
  }
`;

export const RedirectText = styled.span`
  color: #141419;

  &:hover {
    text-decoration: underline;
  }
`;
