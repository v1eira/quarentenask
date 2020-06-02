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

function ModalBox() {
  function closeModal(e) {
    const eventId = e.target.getAttribute('id');
    const parentNodeId = e.target.parentNode.getAttribute('id');
    e.preventDefault();
    if (
      eventId === 'likesModal' ||
      eventId === 'closeModal' ||
      parentNodeId === 'closeModal' ||
      e.key === 'Escape'
    )
      document.getElementById('likesModal').style.display = 'none';
    e.stopPropagation();
  }

  function onEscDown(e) {
    e.preventDefault();
    if (e.key === 'Escape') closeModal(e);
    e.stopPropagation();
  }

  document.addEventListener('keydown', onEscDown);

  return (
    <Modal
      id="likesModal"
      onKeyDown={(e) => onEscDown(e)}
      onClick={(e) => closeModal(e)}
    >
      <ModalContent id="likesContent">
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

export default ModalBox;
