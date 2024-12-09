import React, { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { List, Result } from 'antd';

import { LIMIT_PRODUCTS } from '../../../constants/constants';
import { Product } from '../../../models/Product';
import { fetchProducts } from '../../../services/products';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import ProductCard from '../ProductCard/ProductCard';
import ProductMetadataContainer from '../ProductMetadataContainer/ProductMetadataContainer';

export default function ProductListContainer() {
  const [startAt, setStartAt] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>();
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: [
      'getProducts',
      {
        startAt,
        categoryFilter,
      },
    ],
    queryFn: () => fetchProducts(startAt, categoryFilter),
    refetchInterval: 60000,
  });

  useEffect(() => {
    if (!data || !data.length || error) {
      setIsLoadingMore(false);
      return;
    }
    if (isLoadingMore) {
      setProducts((preProducts) => [...preProducts, ...data]);
      setIsLoadingMore(false);
    } else {
      setProducts(data);
    }
  }, [data, error, isLoadingMore]);

  const handleClickLoadMore = () => {
    setStartAt((preStartAt) => preStartAt + LIMIT_PRODUCTS);
    setIsLoadingMore(true);
  };
  const handleClickCategoryFilter = (filter: string) => setCategoryFilter(filter);

  if (error) {
    return <Result status="500" title="500" subTitle="Sorry, something went wrong." />;
  }

  return (
    <>
      <ProductMetadataContainer onClickCategoryFilter={handleClickCategoryFilter} />
      <List
        style={{ height: '100vh', overflow: 'hidden', overflowY: 'auto', marginBottom: '5rem' }}
        grid={{ gutter: 32, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 4 }}
        dataSource={products}
        loading={isLoading}
        renderItem={(product) => <ProductCard product={product} />}
      />
      <LoadMoreButton loading={isLoading} onClickLoadMore={handleClickLoadMore} />
    </>
  );
}
