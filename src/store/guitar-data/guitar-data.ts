import { createReducer } from '@reduxjs/toolkit';
import { GuitarData } from '../../types/state';
import { loadGuitarById, loadGuitars, loadGuitarsWithoutFilters } from '../action';

const initialState: GuitarData = {
  guitars: [],
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
    .addCase(loadGuitarById, (state, action) => {
      const { guitar } = action.payload;
      state.guitar = guitar;
    });
});

export { guitarData };
