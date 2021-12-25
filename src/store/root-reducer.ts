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
  setUserPriceMax,
  setIsAcousticCheck,
  setIsElectricCheck,
  setIsUkuleleCheck,
  setIsFourStringsCheck,
  setIsSixStringsCheck,
  setIsSevenStringsCheck,
  setIsTwelveStringsCheck
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
  isAcousticCheck: false,
  isElectricCheck: false,
  isUkuleleCheck: false,
  isFourStringsCheck: false,
  isSixStringsCheck: false,
  isSevenStringsCheck: false,
  isTwelveStringsCheck: false,
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

export { rootReducer };
