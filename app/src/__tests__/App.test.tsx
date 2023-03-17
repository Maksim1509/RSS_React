// Imports
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('render App component', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
