const mockUseQuery = jest.fn();
jest.mock('@tanstack/react-query', () => ({
  useQuery: () => mockUseQuery(),
}));

import React from 'react';

import { screen } from '@testing-library/react';

import MarketPlacePage from './MarketPlacePage';
import { MOCK_PRODUCTS } from '../../services/contants';
import { renderWithProviders } from '../../utils/renderWithProvider';

describe('MarketPlacePage', () => {
  it('renders MarketplacePage component correctly', () => {
    mockUseQuery.mockReturnValue({
      data: MOCK_PRODUCTS,
      isLoading: false,
      error: null,
    });
    renderWithProviders(<MarketPlacePage />);

    expect(screen.getByText('Metal Gear Girl')).toBeInTheDocument();

    const image = screen.getByAltText('Footer-image');
    expect(image).toBeInTheDocument();
  });
});
