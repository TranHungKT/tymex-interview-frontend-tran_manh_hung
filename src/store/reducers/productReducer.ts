import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../models/Product';

export interface ProductState {
  products: Product[];
  startAt: number;
  filter: {
    category?: string;
    searchText?: string;
    priceRange?: number[];
    tier?: string;
    theme?: string;
    createdAt?: string;
    price?: string;
  };
}

const initialState: ProductState = {
  products: [],
  startAt: 0,
  filter: {
    price: 'asc',
    createdAt: 'desc',
  },
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
