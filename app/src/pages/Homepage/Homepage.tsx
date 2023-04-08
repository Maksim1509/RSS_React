import React, { useState } from 'react';
import { Result } from 'types/types';
import Search from '../../components/Search/Search';
import './style.scss';
import CardsList from '../../components/CardsList/CardsList';
import Modal from '../../components/Modal/Modal';

const Homepage = () => {
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cards, setCards] = useState<Result[]>([]);

  const hideModal = () => setModal(false);
  const openModal = (id: number) => {
    setModalId(id);
    setModal(true);
  };

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const showError = (e: string) => setError(e);
  const hideError = () => setError(null);

  const updateCards = (cards: Result[]) => {
    setCards(cards);
  };

  return (
    <section className="home">
      {modal && <Modal hideModal={hideModal} id={modalId} />}

      <h1 className="home__title">Home</h1>
      <div className="home__search">
        <Search
          updateCards={updateCards}
          showLoading={showLoading}
          hideLoading={hideLoading}
          showError={showError}
          hideError={hideError}
        />
      </div>
      <section className="home__cards" data-testid="cards-list">
        <CardsList cards={cards} openModal={openModal} />
      </section>
      {loading && <p className="home__loading">Loading...</p>}
      {error && <p className="home__loading">{error}</p>}
    </section>
  );
};

export default Homepage;
