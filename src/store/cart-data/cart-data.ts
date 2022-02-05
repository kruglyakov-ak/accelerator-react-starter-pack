import { createReducer } from '@reduxjs/toolkit';
import { CartData } from '../../types/state';
import {
  setGuitarsInCart,
  deleteGuitarInCart,
  setTotalPrice,
  setGuitarsInCartCount
} from '../action';

const initialState: CartData = {
  guitarsInCart: [],
  totalPrice: 0,
  guitarsInCartCount: [],
};

const cartData = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitarsInCart, (state, action) => {
      const { guitarInCart } = action.payload;
      state.guitarsInCart.push(guitarInCart);
    })
    .addCase(setGuitarsInCartCount, (state, action) => {
      const { guitarInCartCount } = action.payload;
      if (state.guitarsInCartCount.some((guitar) => guitar.id === guitarInCartCount.id)) {
        state.guitarsInCartCount.forEach((guitar) => {
          if (guitar.id === guitarInCartCount.id) {
            guitar.count = guitarInCartCount.count;
          }
        });
      } else {
        state.guitarsInCartCount.push(guitarInCartCount);
      }
    })
    .addCase(deleteGuitarInCart, (state, action) => {
      const { deletedGuitarInCart } = action.payload;
      const index = state.guitarsInCart.findIndex((guitar) => guitar.id === deletedGuitarInCart.id);
      state.guitarsInCart.splice(index, 1);
    })
    .addCase(setTotalPrice, (state, action) => {
      const { totalPrice } = action.payload;
      state.totalPrice = totalPrice;
    });
});

export { cartData };
