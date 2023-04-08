import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import './Modal.scss';
import { BASEURL } from '../../route';
import { LocationResponse, Result } from 'types/types';
import ModalCard from './ModalCard/ModalCard';

interface ModalProps {
  hideModal: () => void;
  id: number | null;
}

const Modal = (props: ModalProps) => {
  const { hideModal, id } = props;
  const [data, setData] = useState<Result>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const hideByEsc = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === 'Escape') hideModal();
  };

  const modalRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch(`${BASEURL}/${id}`)
      .then((res) => res.json())
      .then((data: Result) => {
        setLoading(false);
        setData(data);
        return fetch(data.location.url);
      })
      .then((res) => res.json())
      .then((data: LocationResponse) => {
        setData((prev) => {
          if (prev) return { ...prev, locationResponse: data };
        });
      })
      .catch(() => {
        setLoading(false);
        setError('Что-то пошло не так');
      });
  }, [id]);

  return (
    <div className="home__modal" onClick={hideModal}>
      {loading && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      <button ref={modalRef} className="modal__close" onClick={hideModal} onKeyDown={hideByEsc}>
        X
      </button>
      {data && <ModalCard {...data} />}
    </div>
  );
};

export default Modal;
