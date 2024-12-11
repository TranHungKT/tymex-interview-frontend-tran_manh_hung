import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import LayoutFooter from './LayoutFooter';
import '../../utils/matchMediaTest';

describe('LayoutFooter', () => {
  beforeEach(() => {
    render(<LayoutFooter />);
  });

  test('should render correctly', () => {
    expect(screen.getByText('NAVIGATION')).toBeInTheDocument();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Our teams')).toBeInTheDocument();

    expect(screen.getByText('Whitepaper')).toBeInTheDocument();
    expect(screen.getByText('Marketplace')).toBeInTheDocument();
    expect(screen.getByText('Roadmap')).toBeInTheDocument();

    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();

    expect(screen.getByText('CONTACT US')).toBeInTheDocument();
    expect(screen.getByText('01234568910')).toBeInTheDocument();
    expect(screen.getByText('tymex-talent@tyme.com')).toBeInTheDocument();
  });

  test('should render subcribe section with input', () => {
    expect(screen.getByText('SUBCRIBE TO RECEIVE OUR LATEST UPDATE')).toBeInTheDocument();

    const subscribeButton = screen.getByText('Subcribe');
    expect(subscribeButton).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Your email address');
    expect(emailInput).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect((emailInput as any).value).toBe('test@example.com');
  });
});
