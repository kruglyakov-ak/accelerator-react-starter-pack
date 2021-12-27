import { createReducer } from '@reduxjs/toolkit';
import { PagePagination } from '../../types/state';
import { setGuitarsCount, setCurrentPageNumber } from '../action';

const initialState: PagePagination = {
  guitarsCount: 0,
  currentPageNumber: 0,
};

const pagePagination = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitarsCount, (state, action) => {
      const { guitarsCount } = action.payload;
      state.guitarsCount = guitarsCount;
    })
    .addCase(setCurrentPageNumber, (state, action) => {
      const { currentPageNumber } = action.payload;
      state.currentPageNumber = currentPageNumber;
    });
});

export { pagePagination };
