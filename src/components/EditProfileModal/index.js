import React from 'react';
import { FaTimes } from 'react-icons/fa';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalName,
  UserInfo,
  Images,
  InputField,
} from './styles';

function EditProfileModal() {
  function closeModal(e) {
    const eventId = e.target.getAttribute('id');
    const parentNodeId = e.target.parentNode.getAttribute('id');
    e.preventDefault();
    if (
      eventId === 'edit-profile-modal' ||
      eventId === 'closeModal' ||
      parentNodeId === 'closeModal' ||
      e.key === 'Escape'
    )
      document.getElementById('edit-profile-modal').style.display = 'none';
    e.stopPropagation();
  }

  function onEscDown(e) {
    if (e.key === 'Escape') closeModal(e);
  }

  document.addEventListener('keydown', onEscDown);

  return (
    <Modal id="edit-profile-modal" onClick={(e) => closeModal(e)}>
      <ModalContent>
        <ModalHeader>
          <ModalName>Editar perfil</ModalName>
          <FaTimes id="closeModal" color="#999" />
        </ModalHeader>
        <UserInfo>
          <Images>
            <img
              src="https://pbs.twimg.com/profile_banners/1103890260205887488/1552027687/1500x500"
              alt="cover"
              className="banner"
            />
            <img
              src="https://pbs.twimg.com/profile_images/1236710786061524994/JcWN0IOE_400x400.jpg"
              alt="profile"
              className="profile-image"
            />
          </Images>
          <InputField>
            <span className="input-label">Nome</span>
            <input type="text" />
          </InputField>
          <InputField>
            <span className="input-label">@</span>
            <input type="text" />
          </InputField>
          <InputField>
            <span className="input-label">Instagram</span>
            <input type="text" />
          </InputField>
          <InputField>
            <span className="input-label">Twitter</span>
            <input type="text" />
          </InputField>
          <InputField>
            <span className="input-label">Cidade</span>
            <input type="text" />
          </InputField>
          <InputField>
            <span className="input-label">Data de nascimento</span>
            <input type="text" />
          </InputField>
        </UserInfo>
      </ModalContent>
    </Modal>
  );
}

export default EditProfileModal;
