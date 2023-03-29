import React from 'react';
import { ICard } from '../../types/types';
import './style.scss';

const Card = (props: ICard) => {
  return (
    <section className="card">
      <img className="card__img" src={props.images[0]} alt="card-image" data-testid="card-img" />
      <div className="card__wrap">
        <span className="card__category" data-testid="card-category">
          {props.category}
        </span>
        <span className="card__brand" data-testid="card-brand">
          {props.brand}
        </span>
        <h3 className="card__title" data-testid="card-title">
          {props.title}
        </h3>
        <p className="card__desc">{props.description}</p>
        <span className="card__price" data-testid="card-price">
          {props.price}$
        </span>
        <span className="card__discount">- {Math.floor(props.discountPercentage)}%</span>
        <span className="card__stock" data-testid="card-stock">
          Stock: {props.stock}
        </span>
        <span className="card__rating">{props.rating}</span>
      </div>
    </section>
  );
};

export default Card;
