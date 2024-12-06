import React from 'react';

import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { CustomMenu } from './styles';

const items = [
  { label: 'HOME', key: 1, localUrl: 'home' },
  { label: 'ABOUT US', key: 2, localUrl: 'aboutUs' },
  { label: 'OUR TEAMS', key: 3, localUrl: 'ourTeams' },
  { label: 'MARKETPLACE ROADMAP', key: 4, localUrl: 'marketplace' },
  { label: 'WHITE PAPER', key: 6, localUrl: 'whitePaper' },
];

const { Item } = Menu;

interface MenuHeaderProps {
  mode?: 'horizontal' | 'vertical' | 'inline';
}

export default function MenuHeader({ mode = 'horizontal' }: MenuHeaderProps) {
  const navigate = useNavigate();

  return (
    <CustomMenu mode={mode}>
      {items.map((item) => (
        <Item key={item.key} onClick={() => navigate(item.localUrl)}>
          {item.label}
        </Item>
      ))}
    </CustomMenu>
  );
}
