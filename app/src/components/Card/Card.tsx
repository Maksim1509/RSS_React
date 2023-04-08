import React from 'react';
import { Result } from '../../types/types';
import './style.scss';

const Card = (props: Result) => {
  return (
    <section className="card">
      <img className="card__img" src={props.image} alt="card-image" data-testid="card-img" />
      <h3 className="card__name" data-testid="card-name">
        {props.name}
      </h3>
    </section>
  );
};

export default Card;
