import React from 'react';

import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { CustomMenu } from './styles';
import { MENU_HEADER_ITEMS } from '../../constants/constants';

const { Item } = Menu;

interface MenuHeaderProps {
  mode?: 'horizontal' | 'vertical' | 'inline';
}

export default function MenuHeader({ mode = 'horizontal' }: MenuHeaderProps) {
  const navigate = useNavigate();

  return (
    <CustomMenu mode={mode} style={{ backgroundColor: 'transparent' }}>
      {MENU_HEADER_ITEMS.map((item) => (
        <Item
          key={item.key}
          onClick={() => navigate(item.localUrl)}
          style={{ fontFamily: 'drone' }}
        >
          {item.label}
        </Item>
      ))}
    </CustomMenu>
  );
}
