import React, { KeyboardEvent, useEffect, useRef } from 'react';
import './Modal.scss';
import ModalCard from './ModalCard/ModalCard';
import { useAppDispatch } from '../../hooks/hooks';
import { closeModal } from '../../store/modalSlice';

const Modal = () => {
  const dispatch = useAppDispatch();

  const hideByEsc = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === 'Escape') dispatch(closeModal());
  };

  const hideByClick = () => {
    dispatch(closeModal());
  };

  const modalRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <div className="home__modal" onClick={hideByClick}>
      <button ref={modalRef} className="modal__close" onClick={hideByClick} onKeyDown={hideByEsc}>
        X
      </button>
      <ModalCard />
    </div>
  );
};

export default Modal;
