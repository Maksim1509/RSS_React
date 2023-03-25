import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';

describe('Form', () => {
  it('render Form component', () => {
    render(<Form />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByTestId('form-date')).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
});
