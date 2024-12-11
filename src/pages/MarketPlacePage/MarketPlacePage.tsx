import React from 'react';

import { Col, Row } from 'antd';

import Banner from './Banner/Banner';
import './styles.css';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import SearchFormContainer from './SearchForm/SearchFormContainer';

export default function MarketPlacePage() {
  return (
    <div className="marketplace__container">
      <Banner />
      <Row className="marketplace__content-container">
        <Col span={4}></Col>
        <Col span={4}>
          <SearchFormContainer />
        </Col>
        <Col span={12} xxl={{ span: 10 }}>
          <ProductListContainer />
        </Col>
        <Col span={4}></Col>
      </Row>

      <img
        src="assets/images/frame-footer.png"
        style={{ width: '100%', marginTop: '3rem', height: '15%', objectFit: 'contain' }}
      />
    </div>
  );
}
