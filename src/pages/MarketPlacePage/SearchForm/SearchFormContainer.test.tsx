import React from 'react';

import { screen } from '@testing-library/react';

import SearchFormContainer from './SearchFormContainer';
import { renderWithProviders } from '../../../utils/renderWithProvider';

describe('SearchFormContainer', () => {
  it('should render correctly', () => {
    renderWithProviders(<SearchFormContainer />);
    expect(screen.getByPlaceholderText('Quick search')).toBeInTheDocument();
    expect(screen.getByText('TIER')).toBeInTheDocument();
    expect(screen.getByText('THEME')).toBeInTheDocument();
    expect(screen.getByText('TIME')).toBeInTheDocument();
    expect(screen.getByText('Reset filter')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
