import React from 'react';

import { render, screen } from '@testing-library/react';

import ProductCard, { ProductCardProps } from './ProductCard';
import { MOCK_PRODUCTS } from '../../../services/contants';
import '../../../utils/matchMediaTest';
const mockProps: ProductCardProps = {
  product: {
    ...MOCK_PRODUCTS[0],
    imageUrl: '',
  },
};

describe('ProductCard', () => {
  test('should render card correctly', () => {
    render(<ProductCard {...mockProps} />);

    expect(screen.getByText('Metal Gear Girl')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
    expect(screen.getByText('30.09')).toBeInTheDocument();
    expect(screen.getByText('Ghozali_Ghozalu')).toBeInTheDocument();
  });
});
