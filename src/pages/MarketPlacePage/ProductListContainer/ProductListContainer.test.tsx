const mockUseQuery = jest.fn();
jest.mock('@tanstack/react-query', () => ({
  useQuery: () => mockUseQuery(),
}));

import React from 'react';

import { screen } from '@testing-library/react';

import ProductListContainer from './ProductListContainer';
import { MOCK_PRODUCTS } from '../../../services/contants';
import { renderWithProviders } from '../../../utils/renderWithProvider';

describe('ProductListContainer', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render product card after response success', () => {
    mockUseQuery.mockReturnValue({
      data: MOCK_PRODUCTS,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<ProductListContainer />);
    expect(screen.getByText('Metal Gear Girl')).toBeInTheDocument();
    expect(screen.getAllByText('Premium')[0]).toBeInTheDocument();
    expect(screen.getByText('30.09')).toBeInTheDocument();
    expect(screen.getAllByText('Ghozali_Ghozalu')[0]).toBeInTheDocument();
  });

  it('should render error in case response error', () => {
    mockUseQuery.mockReturnValue({
      data: [],
      isLoading: false,
      error: 'Error',
    });

    renderWithProviders(<ProductListContainer />);
    expect(screen.getByText('Sorry, something went wrong.')).toBeInTheDocument();
  });
});
