import React from 'react';
import './CardsList.scss';
import { Result } from 'types/types';
import Card from '../Card/Card';

interface CardsListProps {
  cards: Result[];
  openModal: (id: number) => void;
}

const CardsList = ({ cards, openModal }: CardsListProps) => (
  <>
    {cards.map((card) => (
      <div key={card.id} className="card__container" onClick={() => openModal(card.id)}>
        <Card {...card} />
      </div>
    ))}
  </>
);
export default CardsList;
