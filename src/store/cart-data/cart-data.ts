import { createReducer } from '@reduxjs/toolkit';
import { CartData } from '../../types/state';
import {
  setGuitarsInCart,
  deleteGuitarInCart,
  setTotalPrices
} from '../action';

const initialState: CartData = {
  guitarsInCart: [],
  totalPrices: [],
};

const cartData = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitarsInCart, (state, action) => {
      const { guitarInCart } = action.payload;
      state.guitarsInCart.push(guitarInCart);
    })
    .addCase(deleteGuitarInCart, (state, action) => {
      const { deletedGuitarInCart } = action.payload;
      const index = state.guitarsInCart.findIndex((guitar) => guitar.id === deletedGuitarInCart.id);
      state.guitarsInCart.splice(index, 1);
    })
    .addCase(setTotalPrices, (state, action) => {
      const { totalPrice } = action.payload;
      state.totalPrices.push(totalPrice);
    });
});

export { cartData };
