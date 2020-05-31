import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { Modal, ModalContent, Close } from './styles';

function ModalBox() {
  // When the user clicks on <span> (x), close the modal
  function closeModal(e) {
    e.preventDefault();
    document.getElementById('likesModal').style.display = 'none';
    e.stopPropagation();
  }

  return (
    <Modal id="likesModal" onClick={(e) => closeModal(e)}>
      <ModalContent id="likesContent">
        <Close id="closeModal" onClick={(e) => closeModal(e)}>
          <FaTimes color="#666" />
        </Close>
        <p>Some text in the Modal..</p>
      </ModalContent>
    </Modal>
  );
}

export default ModalBox;
