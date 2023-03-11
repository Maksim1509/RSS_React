import Header from '../Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <main className="main">
      <Outlet />
    </main>
    <footer className="footer"></footer>
  </>
);

export default Layout;
