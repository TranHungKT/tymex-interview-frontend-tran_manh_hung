import React from 'react';

import { Button } from 'antd';
import './styles.css';
interface LoadMoreButtonProps {
  loading: boolean;
  onClickLoadMore: () => void;
}

export default function LoadMoreButton({ loading, onClickLoadMore }: LoadMoreButtonProps) {
  return (
    <div className="load-more__container">
      <Button
        type="primary"
        size="large"
        className="load-more__button"
        onClick={onClickLoadMore}
        loading={loading}
      >
        View more
      </Button>
    </div>
  );
}
