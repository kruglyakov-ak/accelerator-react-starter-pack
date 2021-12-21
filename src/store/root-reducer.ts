import { createReducer } from '@reduxjs/toolkit';
import { OrderType, SortType } from '../const';
import { State } from '../types/state';
import { changeOrderType, changeSortType, loadGuitarById, loadGuitars } from './action';

const initialState: State = {
  guitars: [],
  guitar: null,
  sortType: SortType.Price,
  orderType: OrderType.Asc,
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
    })
    .addCase(changeOrderType, (state, action) => {
      const { orderType } = action.payload;
      state.orderType = orderType;
    });
});

export { rootReducer };
