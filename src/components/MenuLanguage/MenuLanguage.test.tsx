import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import MenuLanguage, { MENU_LANGUAGE_ITEMS } from './MenuLanguage';

describe('MenuLanguage', () => {
  test('should render correctly correctly', () => {
    render(<MenuLanguage />);
    MENU_LANGUAGE_ITEMS.forEach((item) => {
      const menuItem = screen.getByText(item.label);
      expect(menuItem).toBeInTheDocument();
    });
  });
});
