import React from 'react';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import { Button, List, Row } from 'antd';

import { fetchProductCategories } from '../../../services/products';
import { useAppSelector } from '../../../store/store';
import './styles.css';
interface ProductMetadataContainerProps {
  onClickCategoryFilter: (categoryFilter: string) => void;
}

export default function ProductMetadataContainer({
  onClickCategoryFilter,
}: ProductMetadataContainerProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['getProductCategories'],
    queryFn: () => fetchProductCategories(),
  });
  const { category } = useAppSelector((state) => state.products.filter);

  if ((isLoading && error) || !data) {
    return <></>;
  }

  return (
    <Row className="product-metadata__container">
      <List
        itemLayout="horizontal"
        dataSource={data}
        grid={{ gutter: 16 }}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Button
              type="primary"
              className={
                category === item.category
                  ? 'product-metadata__button-primary'
                  : 'product-metadata__button-secondary'
              }
              onClick={() => onClickCategoryFilter(item.category)}
            >
              {item.category}
            </Button>
          </List.Item>
        )}
      />
      <Button type="primary" className="product-metadata__up-icon ">
        <FontAwesomeIcon icon={faAngleUp} />
      </Button>
    </Row>
  );
}
