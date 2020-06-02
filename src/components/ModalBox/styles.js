import styled from 'styled-components';

export const Modal = styled.div`
  cursor: default;
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 110%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(255, 255, 255, 0.2); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  background-color: #000;
  margin: 10% auto; /* 15% from the top and centered */
  border-radius: 12px;
  width: 500px; /* Could be more or less, depending on screen size */
  min-height: 400px;
  max-height: 600px;
  position: relative;
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

export const UserList = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export const ListContent = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  width: 100%;
`;
