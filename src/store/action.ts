import { createAction } from '@reduxjs/toolkit';
import { OrderType, SortType } from '../const';
import { ActionType } from '../types/action';
import { Guitar } from '../types/guitar';

const loadGuitars = createAction(
  ActionType.LoadGuitars,
  (guitars: Guitar[]) => ({
    payload: {
      guitars,
    },
  }),
);

const loadGuitarById = createAction(
  ActionType.LoadGuitarById,
  (guitar: Guitar) => ({
    payload: {
      guitar,
    },
  }),
);

const setSortType = createAction(
  ActionType.SetSortType,
  (sortType: SortType) => ({
    payload: {
      sortType,
    },
  }),
);

const setOrderType = createAction(
  ActionType.SetOrderType,
  (orderType: OrderType) => ({
    payload: {
      orderType,
    },
  }),
);

const setPriceRangeMin = createAction(
  ActionType.SetPriceRangeMin,
  (priceRangeMin: number) => ({
    payload: {
      priceRangeMin,
    },
  }),
);

const setPriceRangeMax = createAction(
  ActionType.SetPriceRangeMax,
  (priceRangeMax: number) => ({
    payload: {
      priceRangeMax,
    },
  }),
);

const setUserPriceMin = createAction(
  ActionType.SetUserPriceMin,
  (userPriceMin: string) => ({
    payload: {
      userPriceMin,
    },
  }),
);

const setUserPriceMax = createAction(
  ActionType.SetUserPriceMax,
  (userPriceMax: string) => ({
    payload: {
      userPriceMax,
    },
  }),
);

const setIsAcousticCheck = createAction(
  ActionType.SetIsAcousticCheck,
  (isAcousticCheck: boolean) => ({
    payload: {
      isAcousticCheck,
    },
  }),
);

const setIsElectricCheck = createAction(
  ActionType.SetIsElectricCheck,
  (isElectricCheck: boolean) => ({
    payload: {
      isElectricCheck,
    },
  }),
);

const setIsUkuleleCheck = createAction(
  ActionType.SetIsUkuleleCheck,
  (isUkuleleCheck: boolean) => ({
    payload: {
      isUkuleleCheck,
    },
  }),
);

const setIsFourStringsCheck = createAction(
  ActionType.SetIsFourStringsCheck,
  (isFourStringsCheck: boolean) => ({
    payload: {
      isFourStringsCheck,
    },
  }),
);

const setIsSixStringsCheck = createAction(
  ActionType.SetIsSixStringsCheck,
  (isSixStringsCheck: boolean) => ({
    payload: {
      isSixStringsCheck,
    },
  }),
);

const setIsSevenStringsCheck = createAction(
  ActionType.SetIsSevenStringsCheck,
  (isSevenStringsCheck: boolean) => ({
    payload: {
      isSevenStringsCheck,
    },
  }),
);

const setIsTwelveStringsCheck = createAction(
  ActionType.SetIsTwelveStringsCheck,
  (isTwelveStringsCheck: boolean) => ({
    payload: {
      isTwelveStringsCheck,
    },
  }),
);

const setGuitarsCount = createAction(
  ActionType.SetGuitarsCount,
  (guitarsCount: number) => ({
    payload: {
      guitarsCount,
    },
  }),
);

const setCurrentPageNumber = createAction(
  ActionType.SetCurrentPageNumber,
  (currentPageNumber: number) => ({
    payload: {
      currentPageNumber,
    },
  }),
);


export {
  loadGuitars,
  loadGuitarById,
  setSortType,
  setOrderType,
  setPriceRangeMin,
  setPriceRangeMax,
  setUserPriceMin,
  setUserPriceMax,
  setIsAcousticCheck,
  setIsElectricCheck,
  setIsUkuleleCheck,
  setIsFourStringsCheck,
  setIsSixStringsCheck,
  setIsSevenStringsCheck,
  setIsTwelveStringsCheck,
  setGuitarsCount,
  setCurrentPageNumber
};
