import { createReducer } from '@reduxjs/toolkit';
import { DefaultPriceRange } from '../../const';
import { CatalogFilter } from '../../types/state';
import { setPriceRangeMax, setPriceRangeMin } from '../action';


const initialState: CatalogFilter = {
  priceRangeMin: DefaultPriceRange.Min,
  priceRangeMax: DefaultPriceRange.Max,
};

const catalogFilter = createReducer(initialState, (builder) => {
  builder
    .addCase(setPriceRangeMin, (state, action) => {
      const { priceRangeMin } = action.payload;
      state.priceRangeMin = priceRangeMin;
    })
    .addCase(setPriceRangeMax, (state, action) => {
      const { priceRangeMax } = action.payload;
      state.priceRangeMax = priceRangeMax;
    });
});

export { catalogFilter };
