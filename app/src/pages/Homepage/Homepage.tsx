import React, { useState } from 'react';
import { Result } from 'types/types';
import Search from '../../components/Search/Search';
import './style.scss';
import CardsList from '../../components/CardsList/CardsList';

const Homepage = () => {
  const [cards, setCards] = useState<Result[]>([]);

  const updateCards = (cards: Result[]) => {
    setCards(cards);
  };

  return (
    <section className="home">
      <h1 className="home__title">Home</h1>
      <div className="home__search">
        <Search updateCards={updateCards} />
      </div>
      <section className="home__cards" data-testid="cards-list">
        <CardsList cards={cards} />
      </section>
    </section>
  );
};

export default Homepage;
