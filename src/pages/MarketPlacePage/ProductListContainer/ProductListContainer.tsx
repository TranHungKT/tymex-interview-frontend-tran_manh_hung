import React, { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { List, Result, Skeleton } from 'antd';

import { fetchProducts } from '../../../services/products';
import {
  filterProducts,
  filterProductsResolve,
  loadMoreProducts,
} from '../../../store/reducers/productReducer';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import ProductCard from '../ProductCard/ProductCard';
import ProductMetadataContainer from '../ProductMetadataContainer/ProductMetadataContainer';
import './styles.css';

export default function ProductListContainer() {
  const { products, startAt, filter } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useQuery({
    queryKey: [
      'getProducts',
      {
        startAt,
        searchText: filter.searchText,
        categoryFilter: filter.category,
        tier: filter.tier,
        theme: filter.theme,
        createdAt: filter.createdAt,
        price: filter.price,
        priceRange: filter.priceRange,
      },
    ],
    queryFn: () => fetchProducts(startAt, filter),
    refetchInterval: 60000,
  });

  useEffect(() => {
    if (isLoading || (!isLoading && error) || !data) {
      return;
    }

    dispatch(filterProductsResolve(data));
  }, [data, dispatch, error, isLoading]);

  const handleClickLoadMore = () => {
    dispatch(loadMoreProducts());
  };
  const handleClickCategoryFilter = (category: string) =>
    dispatch(filterProducts({ ...filter, category: category }));

  if (error) {
    return <Result status="500" title="500" subTitle="Sorry, something went wrong." />;
  }

  return (
    <>
      <ProductMetadataContainer onClickCategoryFilter={handleClickCategoryFilter} />
      {isLoading && startAt === 0 ? (
        <Skeleton />
      ) : (
        <List
          className="product-list__container"
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 4 }}
          dataSource={products}
          loading={isLoading}
          renderItem={(product) => (
            <List.Item key={product.id}>
              <ProductCard product={product} />
            </List.Item>
          )}
        />
      )}
      <LoadMoreButton loading={isLoading} onClickLoadMore={handleClickLoadMore} />
    </>
  );
}
