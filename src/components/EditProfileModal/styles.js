import styled from 'styled-components';

export const Modal = styled.div`
  cursor: default;
  display: none;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 110%;
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
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 22px;

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
`;

export const UserInfo = styled.div`
  overflow-y: auto;
  max-height: calc(80vh - 57px);
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
  background: #141419;
  border-radius: 6px;

  .input-label {
    font-size: 16px;
    color: #999;
  }

  input {
    width: 100%;
    height: 30px;
    border: 0;
    background: transparent;
    color: #fff;
    outline: none;
  }
`;

export const ListContent = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  width: 100%;

  li:last-child {
    border: none;
    border-bottom-left-radius: 12px;
  }
`;
