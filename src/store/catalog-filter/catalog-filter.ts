import { createReducer } from '@reduxjs/toolkit';
import { DefaultPriceRange } from '../../const';
import { CatalogFilter } from '../../types/state';
import { setIsAcousticCheck, setIsElectricCheck, setIsFourStringsCheck, setIsSevenStringsCheck, setIsSixStringsCheck, setIsTwelveStringsCheck, setIsUkuleleCheck, setPriceRangeMax, setPriceRangeMin, setUserPriceMax, setUserPriceMin } from '../action';


const initialState: CatalogFilter = {
  priceRangeMin: DefaultPriceRange.Min,
  priceRangeMax: DefaultPriceRange.Max,
  userPriceMin: '',
  userPriceMax: '',
  isAcousticCheck: false,
  isElectricCheck: false,
  isUkuleleCheck: false,
  isFourStringsCheck: false,
  isSixStringsCheck: false,
  isSevenStringsCheck: false,
  isTwelveStringsCheck: false,
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
    .addCase(setUserPriceMin, (state, action) => {
      const { userPriceMin } = action.payload;
      state.userPriceMin = userPriceMin;
    })
    .addCase(setUserPriceMax, (state, action) => {
      const { userPriceMax } = action.payload;
      state.userPriceMax = userPriceMax;
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
    })
    .addCase(setIsFourStringsCheck, (state, action) => {
      const { isFourStringsCheck } = action.payload;
      state.isFourStringsCheck = isFourStringsCheck;
    })
    .addCase(setIsSixStringsCheck, (state, action) => {
      const { isSixStringsCheck } = action.payload;
      state.isSixStringsCheck = isSixStringsCheck;
    })
    .addCase(setIsSevenStringsCheck, (state, action) => {
      const { isSevenStringsCheck } = action.payload;
      state.isSevenStringsCheck = isSevenStringsCheck;
    })
    .addCase(setIsTwelveStringsCheck, (state, action) => {
      const { isTwelveStringsCheck } = action.payload;
      state.isTwelveStringsCheck = isTwelveStringsCheck;
    });

});

export { catalogFilter };
