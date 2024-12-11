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

      <Row className="marketplace__content-container" gutter={24} justify="center">
        <Col
          xxl={{ span: 3 }}
          xl={{ span: 3 }}
          lg={{ span: 3 }}
          md={{ span: 0 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        ></Col>
        <Col
          xxl={{ span: 4 }}
          xl={{ span: 4 }}
          lg={{ span: 4 }}
          md={{ span: 22 }}
          sm={{ span: 22 }}
          xs={{ span: 22 }}
        >
          <SearchFormContainer />
        </Col>
        <Col
          xxl={{ span: 12 }}
          xl={{ span: 14 }}
          lg={{ span: 14 }}
          md={{ span: 22 }}
          sm={{ span: 22 }}
          xs={{ span: 22 }}
        >
          <ProductListContainer />
        </Col>
        <Col
          xxl={{ span: 3 }}
          xl={{ span: 3 }}
          lg={{ span: 3 }}
          md={{ span: 0 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        ></Col>
      </Row>

      <img
        src="assets/images/frame-footer.png"
        alt="Footer-image"
        className="marketplace__footer-image"
      />
    </div>
  );
}
