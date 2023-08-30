import { ProductModel } from '@/shared/contracts';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BasketState {
  entries: Record<
    ProductModel['id'],
    {
      product: ProductModel;
      count: number;
    }
  >;
}

const initialState: BasketState = {
  entries: {},
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state, { payload }: PayloadAction<ProductModel>) => {
      state.entries[payload.id] = { product: payload, count: 1 };
    },

    removeProductFromBasket: (
      state,
      action: PayloadAction<ProductModel['id']>,
    ) => {
      delete state.entries[action.payload];
    },

    increaseBasketProductCount: (
      state,
      action: PayloadAction<ProductModel['id']>,
    ) => {
      state.entries[action.payload].count++;
    },

    decreaseBasketProductCount: (
      state,
      action: PayloadAction<ProductModel['id']>,
    ) => {
      state.entries[action.payload].count--;
    },

    clearBasket: state => {
      state.entries = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductToBasket,
  removeProductFromBasket,
  increaseBasketProductCount,
  decreaseBasketProductCount,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
