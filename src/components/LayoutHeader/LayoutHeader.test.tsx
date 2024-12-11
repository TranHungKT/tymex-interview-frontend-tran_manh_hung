import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import LayoutHeader from './LayoutHeader';
import '../../utils/matchMediaTest';
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('LayoutHeader', () => {
  test('should render correctly', () => {
    render(<LayoutHeader />);
    expect(screen.getByText('HOME')).toBeInTheDocument();
  });
});
