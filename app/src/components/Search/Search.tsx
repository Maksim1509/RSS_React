import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import './style.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeSerch } from '../../store/search';
import { fetchSearchResult } from '../../store/searchResult';

const Search = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.search);
  const { isInit } = useAppSelector((state) => state.searchResult);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(changeSerch(value));
  };

  const searchSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(fetchSearchResult(value));
  };

  useEffect(() => {
    if (isInit) dispatch(fetchSearchResult(value));
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
