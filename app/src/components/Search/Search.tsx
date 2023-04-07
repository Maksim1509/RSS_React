import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import route from '../../route';
import './style.scss';
import { Result, Root } from 'types/types';

interface SearchProps {
  updateCards: (cards: Result[]) => void;
  showLoading: () => void;
  hideLoading: () => void;
  showError: (e: string) => void;
  hideError: () => void;
}

const Search = (props: SearchProps) => {
  const { updateCards, showLoading, hideLoading, showError, hideError } = props;
  const initState = localStorage.getItem('searchValue') || '';
  const [value, setValue] = useState(initState);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  };

  const searchSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(value);
    hideError();
    showLoading();
    fetch(route(value))
      .then((res) => res.json())
      .then((data: Root) => {
        hideLoading();
        updateCards(data.results);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    return () => localStorage.setItem('searchValue', value);
  });

  useEffect(() => {
    showLoading();
    setTimeout(() => {
      fetch(route(value))
        .then((res) => res.json())
        .then((data: Root) => {
          hideLoading();
          updateCards(data.results);
        })
        .catch(() => showError('Что-то пошло не так, попробуйте перезагрузить страницу'));
    }, 3000);
  }, []);

  return (
    <form className="search" onSubmit={searchSubmit}>
      <label className="search__label">
        <input
          className="search__input"
          type="text"
          value={value}
          onChange={handleChange}
          data-testid="search-input"
        />
        <div className="search__icon" />
      </label>
    </form>
  );
};

export default Search;
