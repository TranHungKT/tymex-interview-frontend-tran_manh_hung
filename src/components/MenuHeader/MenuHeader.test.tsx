import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MenuHeader, { MENU_HEADER_ITEMS } from './MenuHeader';
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('MenuHeader', () => {
  test('should render correctly', () => {
    render(<MenuHeader />);
    expect(screen.getByText('MARKETPLACE ROADMAP')).toBeInTheDocument();
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('ABOUT US')).toBeInTheDocument();
    expect(screen.getByText('WHITE PAPER')).toBeInTheDocument();
    expect(screen.getByText('OUR TEAMS')).toBeInTheDocument();
  });

  test('should able to navigate when click menu items', () => {
    render(<MenuHeader />);
    MENU_HEADER_ITEMS.forEach((item) => {
      const menuItem = screen.getByText(item.label);
      expect(menuItem).toBeInTheDocument();
      fireEvent.click(menuItem);
      expect(mockNavigate).toHaveBeenCalledWith(item.localUrl);
    });
  });
});
