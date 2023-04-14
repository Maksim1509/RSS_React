import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import route from '../../route';
import './style.scss';
import { Result, Root } from 'types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeSerch } from '../../store/search';
import { fetchSearchResult } from '../../store/searchResult';

interface SearchProps {
  updateCards: (cards: Result[]) => void;
  showLoading: () => void;
  hideLoading: () => void;
  showError: (e: string) => void;
  hideError: () => void;
}

const Search = (props: SearchProps) => {
  const { updateCards, showLoading, hideLoading, showError, hideError } = props;
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.search);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(changeSerch(value));
  };

  const searchSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(fetchSearchResult(value));
    // hideError();
    // showLoading();
    // fetch(route(value))
    //   .then((res) => {
    //     if (res.status === 404) {
    //       updateCards([]);
    //       throw new Error('404');
    //     }
    //     return res.json();
    //   })
    //   .then((data: Root) => {
    //     hideLoading();
    //     updateCards(data.results);
    //   })
    //   .catch((e: Error) => {
    //     hideLoading();
    //     if (e.message === '404') return showError('Ничего не найдено');
    //     showError('Что-то пошло не так');
    //   });
  };

  useEffect(() => {
    dispatch(fetchSearchResult(value));
    // showLoading();
    // fetch(route(value))
    //   .then((res) => {
    //     if (res.status === 404) {
    //       updateCards([]);
    //       throw new Error('404');
    //     }
    //     return res.json();
    //   })
    //   .then((data: Root) => {
    //     hideLoading();
    //     updateCards(data.results);
    //   })
    //   .catch((e: Error) => {
    //     hideLoading();
    //     if (e.message === '404') return showError('Ничего не найдено');
    //     showError('Что-то пошло не так');
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="search__icon" onClick={searchSubmit} />
      </label>
    </form>
  );
};

export default Search;
