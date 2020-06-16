/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAt, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalName,
  SaveButton,
  UserInfo,
  Images,
  InputField,
  LogoutButton,
} from './styles';

function EditProfileModal() {
  const history = useHistory();

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

  function dateInputMask(elm) {
    elm.addEventListener('keypress', (e) => {
      if (e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      }

      const len = elm.value.length;

      // If we're at a particular place, let the user type the slash
      // i.e., 12/12/1212
      if (len !== 1 || len !== 3) {
        if (e.keyCode === 47) {
          e.preventDefault();
        }
      }

      // If they don't add the slash, do it for them...
      if (len === 2) {
        elm.value += '/';
      }

      // If they don't add the slash, do it for them...
      if (len === 5) {
        elm.value += '/';
      }
    });
  }

  useEffect(() => {
    const input = document.getElementById('js-date');
    dateInputMask(input);
  });

  useEffect(() => {
    document.addEventListener('keydown', onEscDown);

    return () => {
      document.removeEventListener('keydown', onEscDown);
    };
  });

  return (
    <Modal id="edit-profile-modal" onClick={(e) => closeModal(e)}>
      <ModalContent>
        <ModalHeader>
          <FaTimes id="closeModal" color="#999" />
          <ModalName>Editar perfil</ModalName>
          <SaveButton>
            <span>Salvar</span>
          </SaveButton>
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
            <span className="input-label">
              <FaAt />
            </span>
            <input type="text" autoCapitalize="off" />
          </InputField>
          <InputField>
            <span className="input-label">
              <FaInstagram />
            </span>
            <span className="text-container">
              <label>instagram.com/</label>
              <input type="text" autoCapitalize="off" />
            </span>
          </InputField>
          <InputField>
            <span className="input-label">
              <FaTwitter />
            </span>
            <span className="text-container">
              <label>twitter.com/</label>
              <input type="text" autoCapitalize="off" />
            </span>
          </InputField>
          <InputField>
            <span className="input-label">Cidade</span>
            <input type="text" />
          </InputField>
          <InputField>
            <span className="input-label">Data de nascimento</span>
            <input
              type="text"
              maxLength="10"
              id="js-date"
              placeholder="DD/MM/AAAA"
            />
          </InputField>
          <LogoutButton
            onClick={() => {
              history.push('/');
            }}
          >
            <span>Sair</span>
          </LogoutButton>
        </UserInfo>
      </ModalContent>
    </Modal>
  );
}

export default EditProfileModal;
