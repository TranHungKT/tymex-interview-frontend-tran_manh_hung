const mockUseQuery = jest.fn();
jest.mock('@tanstack/react-query', () => ({
  useQuery: () => mockUseQuery(),
}));

import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import ProductMetadataContainer from './ProductMetadataContainer';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '../../../services/contants';
import { renderWithProviders } from '../../../utils/renderWithProvider';

describe('ProductMetadataContainer', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render product category', () => {
    mockUseQuery.mockReturnValue({
      data: MOCK_CATEGORIES,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<ProductMetadataContainer onClickCategoryFilter={() => {}} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Upper Body')).toBeInTheDocument();
  });

  it('should trigger click function', () => {
    mockUseQuery.mockReturnValue({
      data: MOCK_CATEGORIES,
      isLoading: false,
      error: null,
    });
    const mockHandleClickFilter = jest.fn();
    renderWithProviders(<ProductMetadataContainer onClickCategoryFilter={mockHandleClickFilter} />);
    fireEvent.click(screen.getByText('Upper Body'));
    expect(mockHandleClickFilter).toBeCalled();
  });

  it('should render nothing if there is error', () => {
    mockUseQuery.mockReturnValue({
      data: MOCK_PRODUCTS,
      isLoading: false,
      error: 'Error',
    });

    renderWithProviders(<ProductMetadataContainer onClickCategoryFilter={() => {}} />);
    expect(screen.queryByText('All')).not.toBeInTheDocument();
    expect(screen.queryByText('Upper Body')).not.toBeInTheDocument();
  });

  it('should render nothing if there is no data', () => {
    mockUseQuery.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });

    renderWithProviders(<ProductMetadataContainer onClickCategoryFilter={() => {}} />);
    expect(screen.queryByText('All')).not.toBeInTheDocument();
    expect(screen.queryByText('Upper Body')).not.toBeInTheDocument();
  });
});
