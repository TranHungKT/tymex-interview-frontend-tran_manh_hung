import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../models/Product';

interface ProductState {
  products: Product[];
  startAt: number;
  filter: {
    category?: string;
  };
}

const initialState: ProductState = {
  products: [],
  startAt: 0,
  filter: {},
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadMoreProducts: (state) => {
      state.startAt += 20;
    },
    filterProducts: (state, action: PayloadAction<ProductState['filter']>) => {
      state.startAt = 0;
      state.filter = { ...action.payload };
    },
    filterProductsResolve: (state, action: PayloadAction<Product[]>) => {
      if (state.startAt === 0) {
        state.products = [...action.payload];
      } else {
        state.products = [...state.products, ...action.payload];
      }
    },
  },
});

export const { loadMoreProducts, filterProducts, filterProductsResolve } = productSlice.actions;
export default productSlice.reducer;
