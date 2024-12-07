import React from 'react';

import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { CustomMenu } from './styles';

// TODO: CREATE CONST FOR LOCAL URL AND REUSE IN APP.TSX
const items = [
  { label: 'HOME', key: 1, localUrl: 'home' },
  { label: 'ABOUT US', key: 2, localUrl: 'about-us' },
  { label: 'OUR TEAMS', key: 3, localUrl: 'our-teams' },
  { label: 'MARKETPLACE ROADMAP', key: 4, localUrl: 'marketplace-roadmap' },
  { label: 'WHITE PAPER', key: 6, localUrl: 'white-paper' },
];

const { Item } = Menu;

interface MenuHeaderProps {
  mode?: 'horizontal' | 'vertical' | 'inline';
}

export default function MenuHeader({ mode = 'horizontal' }: MenuHeaderProps) {
  const navigate = useNavigate();

  return (
    <CustomMenu mode={mode} style={{ backgroundColor: 'transparent' }}>
      {items.map((item) => (
        <Item key={item.key} onClick={() => navigate(item.localUrl)}>
          {item.label}
        </Item>
      ))}
    </CustomMenu>
  );
}
