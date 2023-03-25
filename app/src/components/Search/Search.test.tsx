import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Search from './Search';

describe('Search', () => {
  test('change search values', async () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId('search-input') as HTMLInputElement;
    await userEvent.type(input, 'value');
    expect(input.value).toBe('value');
  });
});
