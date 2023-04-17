import React from 'react';
import './CardsList.scss';
import Card from '../Card/Card';
import { useAppSelector } from '../../hooks/hooks';

const CardsList = () => {
  const cards = useAppSelector((state) => state.searchResult.result);
  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className="card__container">
          <Card {...card} />
        </div>
      ))}
    </>
  );
};
export default CardsList;
