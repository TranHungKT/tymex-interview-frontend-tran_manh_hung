import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { Button, List } from 'antd';

import { fetchProductCategories } from '../../../services/products';

interface ProductMetadataContainerProps {
  onClickCategoryFilter: (categoryFilter: string) => void;
}

export default function ProductMetadataContainer({
  onClickCategoryFilter,
}: ProductMetadataContainerProps) {
  const { data } = useQuery({
    queryKey: ['getProductCategories'],
    queryFn: () => fetchProductCategories(),
  });

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      style={{ marginTop: '5rem', marginBottom: '3rem' }}
      renderItem={(item) => (
        <Button
          key={item.id}
          type="primary"
          style={{ marginRight: '1rem' }}
          onClick={() => onClickCategoryFilter(item.category)}
        >
          {item.category}
        </Button>
      )}
    />
  );
}
