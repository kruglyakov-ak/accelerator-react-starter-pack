import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { loadGuitarById, loadGuitars } from './action';

const initialState: State = {
  guitars: [],
  guitar: null,
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
    });
});

export { rootReducer };
