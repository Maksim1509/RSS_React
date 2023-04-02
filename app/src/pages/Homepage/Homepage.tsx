import React from 'react';
import { ICard } from 'types/types';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import data from '../../data/data.json';
import './style.scss';

const Homepage = () => {
  const renderCards = (cardsData: ICard[]) => {
    return cardsData.map((card) => <Card key={card.id} {...card} />);
  };

  return (
    <section className="home">
      <h1 className="home__title">Home</h1>
      <div className="home__search">
        <Search />
      </div>
      <section className="home__cards" data-testid="cards-list">
        {renderCards(data.products)}
      </section>
    </section>
  );
};

export default Homepage;
