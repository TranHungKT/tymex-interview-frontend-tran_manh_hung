import React from 'react';

import { screen } from '@testing-library/react';

import SliderPrice from './SliderPrice';
import { renderWithProviders } from '../../../../utils/renderWithProvider';

describe('SliderPrice', () => {
  it('should render correctly', () => {
    renderWithProviders(<SliderPrice onChange={() => {}} />);

    expect(screen.getByText('PRICE')).toBeInTheDocument();
    expect(screen.getByText('0.01 ETH')).toBeInTheDocument();
    expect(screen.getByText('200 ETH')).toBeInTheDocument();
  });
});
