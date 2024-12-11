import React, { PropsWithChildren } from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import './matchMediaTest';
import { store } from '../store/store';

export function renderWithProviders(ui: React.ReactElement) {
  const Wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return {
    store,
    ...render(ui, { wrapper: Wrapper }),
  };
}
