import { createAction } from '@reduxjs/toolkit';
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

const loadGuitarsWithoutFilters = createAction(
  ActionType.LoadGuitarsWithoutFilters,
  (guitarsWithoutFilters: Guitar[]) => ({
    payload: {
      guitarsWithoutFilters,
    },
  }),
);

const loadGuitarsOnPage = createAction(
  ActionType.LoadGuitarsOnPage,
  (guitarsOnPage: Guitar[]) => ({
    payload: {
      guitarsOnPage,
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
  loadGuitarsWithoutFilters,
  setPriceRangeMin,
  setPriceRangeMax,
  setUserPriceMin,
  setUserPriceMax,
  setIsAcousticCheck,
  setIsElectricCheck,
  setIsUkuleleCheck,
  setGuitarsCount,
  setCurrentPageNumber,
  loadGuitarsOnPage
};
