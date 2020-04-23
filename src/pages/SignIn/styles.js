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
  margin-top: 25vh !important;
  margin: auto;
  width: 480px;
  height: 50vh;

  background: #fff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 160px;
    height: 160px;
    padding: 30px;
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 10px;
  }

  button {
    margin: 20px 0;
  }

  a {
    text-decoration: none;
    margin-top: 10px;
  }

  @media (max-width: 540px) {
    width: 80vw;
  }
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 250px;

  input {
    background: #141419;
    border: 0;
    border-radius: 4px;
    height: 40px;
    padding: 0 15px;
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  svg {
    margin-right: 10px;
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

export const Register = styled.span`
  color: #141419;

  &:hover {
    text-decoration: underline;
  }
`;
