import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import LoadMoreButton from './LoadMoreButton';

describe('LoadMoreButton', () => {
  test('should render correctly', () => {
    render(<LoadMoreButton loading={false} onClickLoadMore={() => {}} />);
    const viewMoreButton = screen.getByText('View more');
    expect(viewMoreButton).toBeInTheDocument();
  });

  test('should able to click button', () => {
    const onClickLoadMoreMock = jest.fn();
    render(<LoadMoreButton loading={false} onClickLoadMore={onClickLoadMoreMock} />);
    const viewMoreButton = screen.getByText('View more');
    fireEvent.click(viewMoreButton);
    expect(onClickLoadMoreMock).toBeCalled();
  });
});
