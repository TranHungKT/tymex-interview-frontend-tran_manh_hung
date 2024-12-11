import React from 'react';

import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Form, Input, Row, Select, Typography } from 'antd';

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
  const filter = useAppSelector((state) => state.products.filter);
  const { searchText, priceRange, tier, theme, createdAt, price } = filter;
  const dispatch = useAppDispatch();

  const handleSubmit = (values: ProductState['filter']) => {
    dispatch(filterProducts(values));
  };

  const handleResetFilter = () => {
    dispatch(filterProducts({}));
  };

  const handleChangePrice = (values: number[]) => {
    dispatch(
      filterProducts({
        ...filter,
        priceRange: values,
      }),
    );
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
          style={{ height: '44px' }}
        />
      </Form.Item>
      <SliderPrice onChange={handleChangePrice} />

      <Form.Item
        label={
          <Typography.Title level={5} type="secondary">
            TIER
          </Typography.Title>
        }
        layout="vertical"
        name="tier"
      >
        <Select size="large">
          {TIER_SELECTION.map((tierItem) => (
            <Select.Option key={tierItem.id} value={tierItem.value}>
              {tierItem.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label={
          <Typography.Title level={5} type="secondary">
            THEME
          </Typography.Title>
        }
        layout="vertical"
        name="theme"
      >
        <Select size="large">
          {THEME_SELECTION.map((themeItem) => (
            <Select.Option key={themeItem.id} value={themeItem.value}>
              {themeItem.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={
          <Typography.Title level={5} type="secondary">
            TIME
          </Typography.Title>
        }
        layout="vertical"
        name="createdAt"
      >
        <Select size="large">
          {TIME_SELECTION.map((timeItem) => (
            <Select.Option key={timeItem.id} value={timeItem.value}>
              {timeItem.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={
          <Typography.Title level={5} type="secondary">
            PRICE
          </Typography.Title>
        }
        layout="vertical"
        name="price"
      >
        <Select size="large">
          {PRICE_SELECTION.map((priceItem) => (
            <Select.Option key={priceItem.id} value={priceItem.value}>
              {priceItem.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row gutter={16}>
        <Col>
          <Form.Item label={null}>
            <Button
              icon={<FontAwesomeIcon icon={faTimesCircle} color="#FBC625" />}
              variant="text"
              onClick={handleResetFilter}
            >
              Reset filter
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
