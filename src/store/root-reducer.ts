import { createReducer } from '@reduxjs/toolkit';
import { DefaultPriceRange, OrderType, SortType } from '../const';
import { State } from '../types/state';
import {
  changeOrderType,
  changeSortType,
  setPriceRangeMin,
  setPriceRangeMax,
  loadGuitarById,
  loadGuitars,
  setUserPriceMin,
  setUserPriceMax
} from './action';

const initialState: State = {
  guitars: [],
  guitar: null,
  sortType: SortType.Default,
  orderType: OrderType.Default,
  priceRangeMin: DefaultPriceRange.Min,
  priceRangeMax: DefaultPriceRange.Max,
  userPriceMin: '',
  userPriceMax: '',
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
    })
    .addCase(setPriceRangeMin, (state, action) => {
      const { priceRangeMin } = action.payload;
      state.priceRangeMin = priceRangeMin;
    })
    .addCase(setPriceRangeMax, (state, action) => {
      const { priceRangeMax } = action.payload;
      state.priceRangeMax = priceRangeMax;
    })
    .addCase(setUserPriceMin, (state, action) => {
      const { userPriceMin } = action.payload;
      state.userPriceMin = userPriceMin;
    })
    .addCase(setUserPriceMax, (state, action) => {
      const { userPriceMax } = action.payload;
      state.userPriceMax = userPriceMax;
    });
});

export { rootReducer };
