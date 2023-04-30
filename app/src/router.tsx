import Aboutpage from './pages/Aboutpage/Aboutpage';
import Homepage from './pages/Homepage/Homepage';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import FormPage from './pages/FormPage/FormPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="about" element={<Aboutpage />} />
      <Route path="404" element={<Notfoundpage />} />
    </Route>
  </Routes>
);

export default App;
