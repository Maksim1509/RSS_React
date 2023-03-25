import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

const cardData = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: ['https://i.dummyjson.com/data/products/1/1.jpg'],
};

describe('Card', () => {
  it('render Card component', () => {
    render(<Card {...cardData} />);
    expect(screen.getByTestId('card-img')).toBeInTheDocument();
    expect(screen.getByTestId('card-title')).toBeInTheDocument();
    expect(screen.getByTestId('card-brand')).toBeInTheDocument();
    expect(screen.getByTestId('card-price')).toBeInTheDocument();
    expect(screen.getByTestId('card-stock')).toBeInTheDocument();
  });
});
