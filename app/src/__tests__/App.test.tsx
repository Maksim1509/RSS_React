// Imports
import { render, screen } from '@testing-library/react';
import Header from 'components/Header/Header';
import React from 'react';
import App from '../App';

describe('App', () => {
  it('render App component', () => {
    render(<App />);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });

  it('header has title page', () => {
    render(<Header title={title} />);
    expect(screen.getAllByText(title)).toBeInTheDocument();
  });
});
