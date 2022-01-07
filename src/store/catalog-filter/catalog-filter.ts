import { createReducer } from '@reduxjs/toolkit';
import { DefaultPriceRange } from '../../const';
import { CatalogFilter } from '../../types/state';
import { setIsAcousticCheck, setIsElectricCheck, setIsUkuleleCheck, setPriceRangeMax, setPriceRangeMin } from '../action';


const initialState: CatalogFilter = {
  priceRangeMin: DefaultPriceRange.Min,
  priceRangeMax: DefaultPriceRange.Max,
  isAcousticCheck: false,
  isElectricCheck: false,
  isUkuleleCheck: false,
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
    })
    .addCase(setIsAcousticCheck, (state, action) => {
      const { isAcousticCheck } = action.payload;
      state.isAcousticCheck = isAcousticCheck;
    })
    .addCase(setIsElectricCheck, (state, action) => {
      const { isElectricCheck } = action.payload;
      state.isElectricCheck = isElectricCheck;
    })
    .addCase(setIsUkuleleCheck, (state, action) => {
      const { isUkuleleCheck } = action.payload;
      state.isUkuleleCheck = isUkuleleCheck;
    });
});

export { catalogFilter };
