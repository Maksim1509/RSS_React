import Aboutpage from './pages/Aboutpage/Aboutpage';
import Homepage from './pages/Homepage/Homepage';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
