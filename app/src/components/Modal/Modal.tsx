import React from 'react';
import './Modal.scss';
import ModalCard from './ModalCard/ModalCard';
import { useAppDispatch } from '../../hooks/hooks';
import { closeModal } from '../../store/modalSlice';

const Modal = () => {
  const dispatch = useAppDispatch();

  const hideByClick = () => {
    dispatch(closeModal());
  };

  return (
    <div className="home__modal" onClick={hideByClick}>
      <button className="modal__close" onClick={hideByClick}>
        X
      </button>
      <ModalCard />
    </div>
  );
};

export default Modal;
