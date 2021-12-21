import { createReducer } from '@reduxjs/toolkit';
import { SortType } from '../const';
import { State } from '../types/state';
import { changeSortType, loadGuitarById, loadGuitars } from './action';

const initialState: State = {
  guitars: [],
  guitar: null,
  sortType: SortType.Default,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      const { guitars } = action.payload;
      state.guitars = guitars;
    })
    .addCase(loadGuitarById, (state, action) => {
      const { guitar } = action.payload;
      state.guitar = guitar;
    })
    .addCase(changeSortType, (state, action) => {
      const { sortType } = action.payload;
      state.sortType = sortType;
    });
});

export { rootReducer };
