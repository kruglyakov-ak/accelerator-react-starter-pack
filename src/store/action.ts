import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Comment } from '../types/comment';
import { Guitar } from '../types/guitar';
import { GuitarInCartCount } from '../types/guitar-in-cart-count';

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

const loadCommentsByGuitarId = createAction(
  ActionType.LoadCommentsByGuitarId,
  (commentsByGuitarId: Comment[]) => ({
    payload: {
      commentsByGuitarId,
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

const setGuitarsInCart = createAction(
  ActionType.SetGuitarsInCart,
  (guitarInCart: Guitar) => ({
    payload: {
      guitarInCart,
    },
  }),
);

const setGuitarsInCartCount = createAction(
  ActionType.SetGuitarsInCartCount,
  (guitarInCartCount: GuitarInCartCount) => ({
    payload: {
      guitarInCartCount,
    },
  }),
);

const deleteGuitarInCart = createAction(
  ActionType.DeleteGuitarInCart,
  (deletedGuitarInCart: Guitar) => ({
    payload: {
      deletedGuitarInCart,
    },
  }),
);

const setTotalPrice = createAction(
  ActionType.SetTotalPrice,
  (totalPrice: number) => ({
    payload: {
      totalPrice,
    },
  }),
);

const setDiscount = createAction(
  ActionType.SetDiscount,
  (discount: number) => ({
    payload: {
      discount,
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
  loadCommentsByGuitarId,
  setIsCommentsLoaded,
  setGuitarsInCart,
  deleteGuitarInCart,
  setTotalPrice,
  setGuitarsInCartCount,
  setDiscount
};
