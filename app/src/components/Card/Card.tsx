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
        <img className="card__img" src={this.props.images[0]} alt="card-image" />
        <div className="card__wrap">
          <span className="card__category">{this.props.category}</span>
          <span className="card__brand">{this.props.brand}</span>
          <h3 className="card__title">{this.props.title}</h3>
          <p className="card__desc">{this.props.description}</p>
          <span className="card__price">{this.props.price}$</span>
          <span className="card__discount">- {Math.floor(this.props.discountPercentage)}%</span>
          <span className="card__stock">Stock: {this.props.stock}</span>
          <span className="card__rating">{this.props.rating}</span>
        </div>
      </section>
    );
  }
}

export default Card;
