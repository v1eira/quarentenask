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
  // When the user clicks on <span> (x), close the modal
  function closeModal(e) {
    const eventId = e.target.getAttribute('id');
    const parentNodeId = e.target.parentNode.getAttribute('id');
    e.preventDefault();
    if (
      eventId === 'likesModal' ||
      eventId === 'closeModal' ||
      parentNodeId === 'closeModal'
    )
      document.getElementById('likesModal').style.display = 'none';
    e.stopPropagation();
  }

  return (
    <Modal id="likesModal" onClick={(e) => closeModal(e)}>
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
