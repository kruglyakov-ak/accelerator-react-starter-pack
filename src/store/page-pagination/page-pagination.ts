import { createReducer } from '@reduxjs/toolkit';
import { PagePagination } from '../../types/state';
import { setGuitarsCount } from '../action';

const initialState: PagePagination = {
  guitarsCount: 0,
};

const pagePagination = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitarsCount, (state, action) => {
      const { guitarsCount } = action.payload;
      state.guitarsCount = guitarsCount;
    });
});

export { pagePagination };
