import React from 'react';

import { Menu } from 'antd';

import { CustomMenu } from '../MenuHeader/styles';
const { Item } = Menu;

export const MENU_LANGUAGE_ITEMS = [
  { label: 'English', key: 1 },
  { label: 'Vietnamese', key: 2 },
];

export default function MenuLanguage() {
  return (
    <CustomMenu mode="vertical" style={{ backgroundColor: 'transparent' }}>
      {MENU_LANGUAGE_ITEMS.map((item) => (
        <Item key={item.key}>{item.label}</Item>
      ))}
    </CustomMenu>
  );
}
