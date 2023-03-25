import React from 'react';
import { ICard } from 'types/types';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import data from '../../data/data.json';
import './style.scss';

class Homepage extends React.Component {
  state: {
    cards: ICard[];
  };
  constructor(props: object) {
    super(props);
    this.state = { cards: data.products };
  }
  renderCards(cardsData: ICard[]) {
    return cardsData.map((card) => <Card key={card.id} {...card} />);
  }

  render(): React.ReactNode {
    return (
      <section className="home">
        <h1 className="home__title">Home</h1>
        <div className="home__search">
          <Search />
        </div>
        <section className="home__cards" data-testid="cards-list">
          {this.renderCards(this.state.cards)}
        </section>
      </section>
    );
  }
}

export default Homepage;
