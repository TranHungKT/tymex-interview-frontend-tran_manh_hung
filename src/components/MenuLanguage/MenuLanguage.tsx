import React from 'react';

import { Menu } from 'antd';

import { CustomMenu } from '../MenuHeader/styles';
const { Item } = Menu;
const items = [
  { label: 'English', key: 1 },
  { label: 'Vietnamese', key: 2 },
];

export default function MenuLanguage() {
  return (
    <CustomMenu mode="vertical" style={{ backgroundColor: 'transparent' }}>
      {items.map((item) => (
        <Item key={item.key}>{item.label}</Item>
      ))}
    </CustomMenu>
  );
}
