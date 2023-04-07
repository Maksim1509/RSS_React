import React from 'react';
import './CardsList.scss';
import { Result } from 'types/types';
import Card from '../Card/Card';

const CardsList = ({ cards }: { cards: Result[] }) => (
  <>
    {cards.map((card) => (
      <Card key={card.id} {...card} />
    ))}
  </>
);
export default CardsList;
