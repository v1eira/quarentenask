import React from 'react';
import { FaTimes } from 'react-icons/fa';

import UserCard from '../UserCard';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalName,
  UserList,
  ListContent,
} from './styles';

function UserListModal() {
  function closeModal(e) {
    const eventId = e.target.getAttribute('id');
    const parentNodeId = e.target.parentNode.getAttribute('id');
    e.preventDefault();
    if (
      eventId === 'user-list-modal' ||
      eventId === 'closeModal' ||
      parentNodeId === 'closeModal' ||
      e.key === 'Escape'
    )
      document.getElementById('user-list-modal').style.display = 'none';
    e.stopPropagation();
  }

  function onEscDown(e) {
    if (e.key === 'Escape') closeModal(e);
  }

  document.addEventListener('keydown', onEscDown);

  return (
    <Modal id="user-list-modal" onClick={(e) => closeModal(e)}>
      <ModalContent>
        <ModalHeader>
          <ModalName>Curtidas</ModalName>
          <FaTimes id="closeModal" color="#999" />
        </ModalHeader>
        <UserList>
          <ListContent>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </ListContent>
        </UserList>
      </ModalContent>
    </Modal>
  );
}

export default UserListModal;
