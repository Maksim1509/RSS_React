import React from 'react';
import { ICard } from '../../types/types';
import './style.scss';

class Card extends React.Component {
  props: ICard;
  constructor(props: ICard) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <section className="card">
        <img
          className="card__img"
          src={this.props.images[0]}
          alt="card-image"
          data-testid="card-img"
        />
        <div className="card__wrap">
          <span className="card__category" data-testid="card-category">
            {this.props.category}
          </span>
          <span className="card__brand" data-testid="card-brand">
            {this.props.brand}
          </span>
          <h3 className="card__title" data-testid="card-title">
            {this.props.title}
          </h3>
          <p className="card__desc">{this.props.description}</p>
          <span className="card__price" data-testid="card-price">
            {this.props.price}$
          </span>
          <span className="card__discount">- {Math.floor(this.props.discountPercentage)}%</span>
          <span className="card__stock" data-testid="card-stock">
            Stock: {this.props.stock}
          </span>
          <span className="card__rating">{this.props.rating}</span>
        </div>
      </section>
    );
  }
}

export default Card;
