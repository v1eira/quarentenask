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
  margin: 20vh auto;
  border-radius: 12px;
  max-width: 500px;
  min-height: 300px;
  max-height: 60vh;

  @media (max-width: 700px) {
    margin-left: 10%;
    margin-right: 10%;
  }

  @media (max-width: 320px) {
    width: 280px;
    margin: 20vh auto;
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
  color: #fff !important;
  font-size: 22px !important;
  font-weight: bold !important;
`;

export const UserList = styled.div`
  overflow-y: auto;
  max-height: calc(60vh - 57px);
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
