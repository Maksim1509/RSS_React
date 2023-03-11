import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav__link nav__link_active' : 'nav__link';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={'/'} className={setActive}>
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={'/about'} className={setActive}>
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
