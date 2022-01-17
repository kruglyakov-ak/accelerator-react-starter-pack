import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Comment } from '../types/comment';
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

const loadComments = createAction(
  ActionType.LoadComments,
  (comments: Comment[]) => ({
    payload: {
      comments,
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

const setGuitarsCount = createAction(
  ActionType.SetGuitarsCount,
  (guitarsCount: number) => ({
    payload: {
      guitarsCount,
    },
  }),
);

const setIsDataLoaded = createAction(
  ActionType.SetIsDataLoaded,
  (isDataLoaded: boolean) => ({
    payload: {
      isDataLoaded,
    },
  }),
);

const setIsProductCardLoaded = createAction(
  ActionType.SetIsProductCardLoaded,
  (isProductCardLoaded: boolean) => ({
    payload: {
      isProductCardLoaded,
    },
  }),
);

const setIsCommentsLoaded = createAction(
  ActionType.SetIsCommentsLoaded,
  (isCommentsLoaded: boolean) => ({
    payload: {
      isCommentsLoaded,
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
  setGuitarsCount,
  loadGuitarsOnPage,
  setIsDataLoaded,
  setIsProductCardLoaded,
  loadComments,
  setIsCommentsLoaded
};
