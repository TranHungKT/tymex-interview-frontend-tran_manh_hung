import styled from '@emotion/styled';
import { Menu } from 'antd';

export const CustomMenu = styled(Menu)`
  && .ant-menu-item {
    font-size: 1.125rem;
  }

  && .ant-menu-item::after {
    transition: border-color 0s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  && .ant-menu-item-selected {
    background-color: transparent;
    color: #da458f;
  }

  && .ant-menu-item-selected::after {
    border-bottom-width: 2px;
    border-bottom-color: #da458f;
    width: 25%;
    margin-left: 0.25rem;
  }

  && .ant-menu-item-selected:hover:after {
    border-bottom-width: 2px;
    border-bottom-color: #da458f;
    width: 25%;
    margin-left: 0.25rem;
  }

  && :not(.ant-menu-item-selected)::after {
    border-bottom-width: 0;
  }

  && :not(.ant-menu-item-selected):hover:after {
    border-bottom-width: 0;
  }
`;
