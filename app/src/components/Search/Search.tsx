import React, { ChangeEvent, useEffect, useState } from 'react';
import './style.scss';

const Search = () => {
  const initState = localStorage.getItem('searchValue') || '';
  const [value, setValue] = useState(initState);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  };

  useEffect(() => {
    return () => localStorage.setItem('searchValue', value);
  });

  return (
    <form className="search" action="">
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
