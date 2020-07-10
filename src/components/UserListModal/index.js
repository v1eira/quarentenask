import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

function UserListModal({ name, id }) {
  function closeModal(e) {
    const eventId = e.target.getAttribute('id');
    const parentNodeId = e.target.parentNode.getAttribute('id');
    e.preventDefault();
    if (
      eventId === id ||
      eventId === 'closeModal' ||
      parentNodeId === 'closeModal' ||
      e.key === 'Escape'
    )
      document.getElementById(id).style.display = 'none';
    e.stopPropagation();
  }

  function onEscDown(e) {
    if (e.key === 'Escape') closeModal(e);
  }

  useEffect(() => {
    document.addEventListener('keydown', onEscDown);

    return () => {
      document.removeEventListener('keydown', onEscDown);
    };
  });

  return (
    <Modal id={id} onClick={(e) => closeModal(e)}>
      <ModalContent>
        <ModalHeader>
          <FaTimes id="closeModal" />
          <ModalName>{name}</ModalName>
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

UserListModal.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default UserListModal;
