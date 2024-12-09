import React from 'react';

import { Col, Row } from 'antd';

import Banner from './Banner/Banner';
import './styles.css';
import ProductListContainer from './ProductListContainer/ProductListContainer';

export default function MarketPlacePage() {
  return (
    <>
      <Banner />
      <Row className="marketplace_content-container">
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={12} xxl={{ span: 10 }}>
          <ProductListContainer />
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
}
