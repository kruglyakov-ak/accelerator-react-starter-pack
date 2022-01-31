import { createReducer } from '@reduxjs/toolkit';
import { GuitarData } from '../../types/state';
import {
  loadGuitarById,
  loadGuitars,
  loadGuitarsOnPage,
  loadGuitarsWithoutFilters,
  setIsDataLoaded,
  setIsProductCardLoaded,
  setGuitarsInCart
} from '../action';

const initialState: GuitarData = {
  guitars: [],
  guitarsOnPage: [],
  guitarsWithoutFilters: [],
  guitar: null,
  guitarsInCart: [],
  isDataLoaded: false,
  isProductCardLoaded: false,
};

const guitarData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      const { guitars } = action.payload;
      state.guitars = guitars;
    })
    .addCase(loadGuitarsWithoutFilters, (state, action) => {
      const { guitarsWithoutFilters } = action.payload;
      state.guitarsWithoutFilters = guitarsWithoutFilters;
    })
    .addCase(loadGuitarsOnPage, (state, action) => {
      const { guitarsOnPage } = action.payload;
      state.guitarsOnPage = guitarsOnPage;
    })
    .addCase(loadGuitarById, (state, action) => {
      const { guitar } = action.payload;
      state.guitar = guitar;
    })
    .addCase(setGuitarsInCart, (state, action) => {
      const { guitarsInCart } = action.payload;
      state.guitarsInCart = guitarsInCart;
    })
    .addCase(setIsDataLoaded, (state, action) => {
      const { isDataLoaded } = action.payload;
      state.isDataLoaded = isDataLoaded;
    })
    .addCase(setIsProductCardLoaded, (state, action) => {
      const { isProductCardLoaded } = action.payload;
      state.isProductCardLoaded = isProductCardLoaded;
    });
});

export { guitarData };
