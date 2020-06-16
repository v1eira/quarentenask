import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Modal = styled.div`
  cursor: default;
  display: none;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ModalContent = styled.div`
  background-color: #000;
  margin: 10vh auto;
  border-radius: 12px;
  max-width: 600px;
  min-height: 300px;
  max-height: 80vh;
  padding-bottom: 5px;

  @media (max-width: 700px) {
    margin-left: 10%;
    margin-right: 10%;
  }

  @media (max-width: 320px) {
    width: 280px;
    margin: 10vh auto;
  }
`;

export const ModalHeader = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #333;

  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    margin: 0;
    padding: 0;

    &:hover,
    &:focus {
      color: white !important;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

export const ModalName = styled.span`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-left: 30px;

  @media (max-width: 450px) {
    margin-left: 15px;
  }
`;

export const SaveButton = styled.button`
  margin-left: auto;
  cursor: pointer;

  border: 1px solid #999;
  border-radius: 20px;
  background: transparent;
  padding: 5px 10px;

  transition: 0.2s;

  span {
    font-size: 15px !important;
    color: #999;
    transition: 0.2s;
  }

  &:hover {
    border-color: #fff;
    background: ${lighten(0.05, '#000')};
    span {
      color: #fff;
    }
  }
`;

export const UserInfo = styled.div`
  overflow-y: auto;
  max-height: calc(80vh - 57px);
  display: flex;
  flex-direction: column;

  @media (max-width: 450px) {
    max-height: calc(80vh - 67px);
  }
`;

export const Images = styled.div`
  position: relative;

  img {
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .banner {
    width: 100%;
    height: 120px;
  }

  .profile-image {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 1px solid black;
    position: absolute;
    top: 65%;
    left: 2%;
  }

  margin-bottom: 80px;

  @media (max-width: 700px) {
    img {
      width: 100vw;
      height: 32vw;
    }

    img + img {
      width: 21vw;
      height: 21vw;
    }
  }

  @media (max-height: 900px) {
    margin-bottom: 8vh;
  }

  @media (max-height: 600px) {
    margin-bottom: 12vh;
  }
`;

export const InputField = styled.div`
  padding: 10px 20px;
  margin: 0 20px 15px;

  display: flex;
  flex-direction: column;
  background: #16161c;
  border-radius: 6px;

  .input-label {
    font-size: 16px;
    color: #999;
    margin-bottom: 5px;

    svg {
      color: #999;
      font-size: 16px;
      margin: 0;
      padding: 0;
    }
  }

  .text-container {
    margin: 0;

    display: flex;
    align-items: baseline;

    label {
      color: #999;
      font-size: 14px;
      padding-right: 1px;
      -webkit-touch-callout: none;
      /*Make the label text unselectable*/
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
  }

  input {
    width: 100%;
    border: 0;
    background: transparent;
    color: #fff;
    outline: none;
    font-size: 14px;
  }
`;

export const LogoutButton = styled.button`
  align-self: center;
  cursor: pointer;
  width: 200px;
  border: none;
  border-radius: 6px;
  background: #dc143c;
  padding: 12px 0;
  margin: 10px 0 !important;

  transition: 0.2s background;

  span {
    font-size: 15px !important;
  }

  &:hover {
    background: ${darken(0.1, '#dc143c')};
  }

  @media (max-width: 450px) {
    padding: 10px 20px;
    margin: 0 20px 15px;
  }
`;
