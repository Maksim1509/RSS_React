import Aboutpage from './pages/Aboutpage/Aboutpage';
import Homepage from './pages/Homepage/Homepage';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<Aboutpage />} />
      <Route path="404" element={<Notfoundpage />} />
      <Route path="*" element={<Navigate to={'404'} />} />
    </Route>
  </Routes>
);

export default App;
