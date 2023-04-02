import { render, screen } from '@testing-library/react';
import React from 'react';
import FormCard from './FormCard';
import { FormData } from '../../components/Form/Form';

let testData: FormData;
describe('FormCard', () => {
  it('render FormCard component', () => {
    const mockFileList = [new File([], 'test.jpg')] as unknown as FileList;
    testData = {
      name: 'Test',
      category: 'Smatrphone',
      condition: 'New',
      file: mockFileList,
      checkbox: true,
      date: Date.now.toString(),
    };
    render(<FormCard {...testData} />);
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/condition/i)).toBeInTheDocument();
  });
});
