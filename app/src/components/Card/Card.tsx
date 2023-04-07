import React from 'react';
import { Result } from '../../types/types';
import './style.scss';

const Card = (props: Result) => {
  return (
    <section className="card">
      <img className="card__img" src={props.image} alt="card-image" data-testid="card-img" />
      <div className="card__wrap">
        <h3 className="card__name" data-testid="card-name">
          {props.name}
        </h3>
        <span className="card__status" data-testid="card-status">
          Status: {props.status}
        </span>
        <span className="card__species" data-testid="card-species">
          Species: {props.species}
        </span>
        <span className="card__gender" data-testid="card-gender">
          Gender: {props.gender}
        </span>
        <span className="card__created">created: {props.created.slice(0, -8)}</span>
      </div>
    </section>
  );
};

export default Card;
