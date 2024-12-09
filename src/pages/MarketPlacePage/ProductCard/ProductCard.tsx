import React from 'react';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Card, Col, List, Row, Tag, Typography } from 'antd';

import { Product } from '../../../models/Product';
import './styles.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <List.Item>
      <Card
        hoverable
        cover={
          <>
            <img src={product.imageUrl} className=".product-card__cover-image" alt="cover image" />
            <Tag className="product-card__tier">{product.tier}</Tag>
            <FontAwesomeIcon icon={faHeart} className="product-card__heart-icon" size="xl" />
          </>
        }
        style={{
          padding: '1rem',
        }}
        size="small"
      >
        <Card.Meta
          className="product-card__meta"
          title={
            <Row justify={'space-between'}>
              <Col>
                <Typography className="product-card__bold-text">{product.title}</Typography>
              </Col>
              <Col>
                <Row>
                  <img
                    src="/assets/images/price.png"
                    alt="price"
                    className="product-card__price-image"
                  />
                  <Typography className="product-card__bold-text">{product.price}</Typography>
                </Row>
              </Col>
            </Row>
          }
          description={
            <Row align="middle">
              <Avatar src="/assets/images/avatar.png" />
              <Typography className="product-card__user-name">Ghozali_Ghozalu</Typography>
            </Row>
          }
        ></Card.Meta>
      </Card>
    </List.Item>
  );
}
