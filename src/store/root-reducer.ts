import { createReducer } from '@reduxjs/toolkit';
import { DefaultPriceRange, OrderType, SortType } from '../const';
import { State } from '../types/state';
import { changeOrderType, changePriceRangeMax, changePriceRangeMin, changeSortType, loadGuitarById, loadGuitars } from './action';

const initialState: State = {
  guitars: [],
  guitar: null,
  sortType: SortType.Default,
  orderType: OrderType.Default,
  priceRangeMin: DefaultPriceRange.Min,
  priceRangeMax: DefaultPriceRange.Max,
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
    .addCase(changePriceRangeMin, (state, action) => {
      const { priceRangeMin } = action.payload;
      state.priceRangeMin = priceRangeMin;
      if (priceRangeMin < DefaultPriceRange.Min) {
        state.priceRangeMin = DefaultPriceRange.Min;
      }
      if (priceRangeMin > DefaultPriceRange.Max) {
        state.priceRangeMin = DefaultPriceRange.Max;
      }
    })
    .addCase(changePriceRangeMax, (state, action) => {
      const { priceRangeMax } = action.payload;
      state.priceRangeMax = priceRangeMax;
    });
});

export { rootReducer };
