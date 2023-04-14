import React from 'react';
import './CardsList.scss';
import Card from '../Card/Card';
import { useAppSelector } from '../../hooks/hooks';

interface CardsListProps {
  openModal: (id: number) => void;
}

const CardsList = ({ openModal }: CardsListProps) => {
  const cards = useAppSelector((state) => state.searchResult.result);
  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className="card__container" onClick={() => openModal(card.id)}>
          <Card {...card} />
        </div>
      ))}
    </>
  );
};
export default CardsList;
