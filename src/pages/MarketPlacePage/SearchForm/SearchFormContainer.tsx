import React from 'react';

import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, Row, Select } from 'antd';

import SliderPrice from './SliderPrice/SliderPrice';
import {
  PRICE_SELECTION,
  THEME_SELECTION,
  TIER_SELECTION,
  TIME_SELECTION,
} from '../../../constants/constants';
import { filterProducts, ProductState } from '../../../store/reducers/productReducer';
import { useAppDispatch, useAppSelector } from '../../../store/store';

export default function SearchFormContainer() {
  const { searchText, priceRange, tier, theme, createdAt, price } = useAppSelector(
    (state) => state.products.filter,
  );
  const dispatch = useAppDispatch();

  const handleSubmit = (values: ProductState['filter']) => {
    dispatch(filterProducts(values));
  };

  const handleResetFilter = () => {
    dispatch(filterProducts({}));
  };

  return (
    <Form
      layout="vertical"
      initialValues={{
        searchText,
        tier,
        theme,
        createdAt,
        price,
        priceRange,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item name="searchText">
        <Input
          size="large"
          placeholder="Quick search"
          prefix={<FontAwesomeIcon icon={faSearch} />}
        />
      </Form.Item>
      <SliderPrice />

      <Form.Item label="TIER" layout="vertical" name="tier">
        <Select>
          {TIER_SELECTION.map((tierItem) => (
            <Select.Option key={tierItem.id} value={tierItem.value}>
              {tierItem.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="THEME" layout="vertical" name="theme">
        <Select>
          {THEME_SELECTION.map((themeItem) => (
            <Select.Option key={themeItem.id} value={themeItem.value}>
              {themeItem.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="TIME" layout="vertical" name="createdAt">
        <Select>
          {TIME_SELECTION.map((timeItem) => (
            <Select.Option key={timeItem.id} value={timeItem.value}>
              {timeItem.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="PRICE" layout="vertical" name="price">
        <Select>
          {PRICE_SELECTION.map((priceItem) => (
            <Select.Option key={priceItem.id} value={priceItem.value}>
              {priceItem.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row>
        <Form.Item label={null}>
          <Button
            icon={<FontAwesomeIcon icon={faTimesCircle} color="#FBC625" />}
            variant="text"
            onClick={handleResetFilter}
          >
            Reset filter
          </Button>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}
