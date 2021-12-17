import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { loadGuitars } from './action';

const initialState: State = {
  guitars: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      const { guitars } = action.payload;
      state.guitars = guitars;
    });
});

export { rootReducer };
