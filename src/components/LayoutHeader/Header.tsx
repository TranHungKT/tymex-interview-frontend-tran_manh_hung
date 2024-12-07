import React from 'react';

import { MenuOutlined } from '@ant-design/icons';
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Popover, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';

import './styles.css';

import MenuHeader from '../MenuHeader/MenuHeader';
import MenuLanguage from '../MenuLanguage/MenuLanguage';

export default function LayoutHeader() {
  return (
    <Header className="header-container">
      <Row gutter={16} justify="space-between">
        <Col lg={{ span: 12 }} md={{ span: 8 }} sm={{ span: 0 }} xs={{ span: 0 }}>
          <MenuHeader mode="horizontal" />
        </Col>
        <Col md={{ span: 0 }} sm={{ span: 4 }} xs={{ span: 2 }}>
          <Popover content={<MenuHeader mode="vertical" />}>
            <MenuOutlined />
          </Popover>
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 18 }}>
          <Button type="primary">Connect Wallet</Button>
          <div className="header_language-button">
            <Popover content={<MenuLanguage />}>
              <FontAwesomeIcon icon={faGlobe} className="header_global-icon" />
              <FontAwesomeIcon icon={faCaretDown} />
            </Popover>
          </div>
        </Col>
      </Row>
    </Header>
  );
}
