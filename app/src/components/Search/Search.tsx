import React, { ChangeEvent } from 'react';
import './style.scss';

class Search extends React.Component {
  state: {
    value: string;
  };
  constructor(props: object) {
    super(props);
    this.state = { value: localStorage.getItem('searchValue') || '' };
  }

  handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    this.setState({ value });
  };

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.value);
  }

  render() {
    return (
      <form className="search" action="">
        <label className="search__label">
          <input
            className="search__input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="search__icon" />
        </label>
      </form>
    );
  }
}

export default Search;
