'use client'
import React, { ReactNode } from 'react';
import './style.scss';

interface ModalTypes{
  isOpen: boolean,
  onClose: Function,
}


const Modal = ({ isOpen , onClose } : ModalTypes) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <span className="modal-close" onClick={() => onClose}>
            &times;
          </span>
        </div>
        <div className="modal-content">

        </div>
      </div>
    </div>
  );
};

export default Modal;