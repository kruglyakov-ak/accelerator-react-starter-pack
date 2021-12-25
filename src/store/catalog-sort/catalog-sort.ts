import { createReducer } from '@reduxjs/toolkit';
import { OrderType, SortType } from '../../const';
import { CatalogSort } from '../../types/state';
import { setOrderType, setSortType } from '../action';

const initialState: CatalogSort = {
  sortType: SortType.Default,
  orderType: OrderType.Default,
};

const catalogSort = createReducer(initialState, (builder) => {
  builder
    .addCase(setSortType, (state, action) => {
      const { sortType } = action.payload;
      state.sortType = sortType;
    })
    .addCase(setOrderType, (state, action) => {
      const { orderType } = action.payload;
      state.orderType = orderType;
    });
});

export { catalogSort };
