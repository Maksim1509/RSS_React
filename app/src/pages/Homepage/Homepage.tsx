import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import './style.scss';
import CardsList from '../../components/CardsList/CardsList';
import Modal from '../../components/Modal/Modal';
import { useAppSelector } from '../../hooks/hooks';

const Homepage = () => {
  const { isLoading, error } = useAppSelector((state) => state.searchResult);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState<number | null>(null);

  const hideModal = () => setModal(false);
  const openModal = (id: number) => {
    setModalId(id);
    setModal(true);
  };

  return (
    <section className="home">
      {modal && <Modal hideModal={hideModal} id={modalId} />}

      <h1 className="home__title">Home</h1>
      <div className="home__search">
        <Search />
      </div>
      {isLoading && <p className="home__loading">Loading...</p>}
      {error && <p className="home__error">{error}</p>}
      <section className="home__cards" data-testid="cards-list">
        <CardsList openModal={openModal} />
      </section>
    </section>
  );
};

export default Homepage;
