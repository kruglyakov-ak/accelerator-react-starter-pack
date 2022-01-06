import { createReducer } from '@reduxjs/toolkit';
import { GuitarData } from '../../types/state';
import { loadGuitarById, loadGuitars, loadGuitarsOnPage, loadGuitarsWithoutFilters } from '../action';

const initialState: GuitarData = {
  guitars: [],
  guitarsOnPage: [],
  guitarsWithoutFilters: [],
  guitar: null,
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
    });
});

export { guitarData };
