import React from 'react';
import Search from '../../components/Search/Search';
import './style.scss';
import CardsList from '../../components/CardsList/CardsList';
import Modal from '../../components/Modal/Modal';
import { useAppSelector } from '../../hooks/hooks';

const Homepage = () => {
  const { isLoading, error } = useAppSelector((state) => state.searchResult);
  const { isShow } = useAppSelector((state) => state.modal);

  return (
    <section className="home">
      {isShow && <Modal />}

      <h1 className="home__title">Home</h1>
      <div className="home__search">
        <Search />
      </div>
      {isLoading && <p className="home__loading">Loading...</p>}
      {error && <p className="home__error">{error}</p>}
      <section className="home__cards" data-testid="cards-list">
        <CardsList />
      </section>
    </section>
  );
};

export default Homepage;
