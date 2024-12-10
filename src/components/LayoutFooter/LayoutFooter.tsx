import React from 'react';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Typography, Layout, Input, Button } from 'antd';
import './styles.css';
export default function LayoutFooter() {
  return (
    <Layout.Footer>
      <Row justify="space-between">
        <Col>
          <div>
            <Typography.Title level={4}>NAVIGATION</Typography.Title>
            <Row gutter={32}>
              <Col>
                <Typography.Title level={5}>Home</Typography.Title>
                <Typography.Title level={5}>About us</Typography.Title>
                <Typography.Title level={5}>Our teams</Typography.Title>
              </Col>
              <Col>
                <Typography.Title level={5}>Whitepaper</Typography.Title>
                <Typography.Title level={5}>Marketplace</Typography.Title>
                <Typography.Title level={5}>Roadmap</Typography.Title>
              </Col>
              <Col>
                <Typography.Title level={5}>FAQs</Typography.Title>
                <Typography.Title level={5}>News</Typography.Title>
                <Typography.Title level={5}>Community</Typography.Title>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <Typography.Title level={4}>CONTACT US</Typography.Title>
          <Row gutter={16}>
            <Col>
              <Typography.Title level={5}>
                <FontAwesomeIcon
                  icon={faPhone}
                  color="black"
                  size="xs"
                  className="footer__phone-icon "
                />
              </Typography.Title>
              <Typography.Title level={5}>
                <img src="/assets/images/message.png" />
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Title level={5}>01234568910</Typography.Title>
              <Typography.Title level={5}>tymex-talent@tyme.com</Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col>
          <Typography.Title level={4}>SUBCRIBE TO RECEIVE OUR LATEST UPDATE</Typography.Title>
          <Row gutter={16}>
            <Col span={18}>
              <Input placeholder="Your email address" style={{ height: '44px' }} />
            </Col>
            <Col span={6}>
              <Button type="primary">Subcribe</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Footer>
  );
}
