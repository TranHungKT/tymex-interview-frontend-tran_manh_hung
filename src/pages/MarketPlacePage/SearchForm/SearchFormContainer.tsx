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

export default function SearchFormContainer() {
  return (
    <Form layout="vertical">
      <Form.Item name="quickSearch">
        <Input
          size="large"
          placeholder="Quick search"
          prefix={<FontAwesomeIcon icon={faSearch} />}
        />
      </Form.Item>
      <SliderPrice />

      <Form.Item label="TIER" layout="vertical" name="tier">
        <Select>
          {TIER_SELECTION.map((tier) => (
            <Select.Option key={tier.id} value={tier.value}>
              {tier.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="THEME" layout="vertical" name="theme">
        <Select>
          {THEME_SELECTION.map((theme) => (
            <Select.Option key={theme.id} value={theme.value}>
              {theme.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="TIME" layout="vertical" name="time">
        <Select>
          {TIME_SELECTION.map((time) => (
            <Select.Option key={time.id} value={time.value}>
              {time.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="PRICE" layout="vertical" name="priceSort">
        <Select>
          {PRICE_SELECTION.map((price) => (
            <Select.Option key={price.id} value={price.value}>
              {price.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row>
        <Form.Item label={null}>
          <Button icon={<FontAwesomeIcon icon={faTimesCircle} color="#FBC625" />} variant="text">
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
