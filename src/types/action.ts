import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from './state';

enum ActionType {
  LoadGuitars = 'data/loadGuitars',
  LoadGuitarById = 'data/loadGuitarById',
  LoadGuitarsWithoutFilters = 'data/loadGuitarsWithoutFilters',
  LoadGuitarsOnPage = 'data/loadGuitarsOnPage',
  SetIsDataLoaded = 'data/setIsDataLoaded',
  SetGuitarsInCart = 'data/setGuitarsInCart',
  SetIsProductCardLoaded = 'cart/setIsProductCardLoaded',
  DeleteGuitarInCart = 'cart/deleteGuitarInCart',
  SetTotalPrice = 'cart/setTotalPrice',
  SetGuitarsInCartCount = 'cart/setGuitarsInCartCount',
  SetDiscount = 'cart/setDiscount',
  IncreaseGuitarsInCartCount = 'cart/increaseGuitarsInCartCount',
  SetSortType = 'sort/setSortType',
  SetOrderType = 'sort/setOrderType',
  SetPriceRangeMin = 'filter/setPriceRangeMin',
  SetPriceRangeMax = 'filter/setPriceRangeMax',
  SetUserPriceMin = 'filter/setUserPriceMin',
  SetUserPriceMax = 'filter/setUserPriceMax',
  SetIsAcousticCheck = 'filter/setIsAcousticCheck',
  SetIsElectricCheck = 'filter/setIsElectricCheck',
  SetIsUkuleleCheck = 'filter/setIsUkuleleCheck',
  SetIsFourStringsCheck = 'filter/setIsFourStringsCheck',
  SetIsSixStringsCheck = 'filter/setIsSixStringsCheck',
  SetIsSevenStringsCheck = 'filter/setIsSevenStringsCheck',
  SetIsTwelveStringsCheck = 'filter/setIsTwelveStringsCheck',
  SetGuitarsCount = 'pagination/setGuitarsCount',
  SetCurrentPageNumber = 'pagination/setCurrentPageNumber',
  LoadComments = 'comments/loadComments',
  LoadCommentsByGuitarId = 'comments/loadCommentsByGuitarId',
  SetIsCommentsLoaded = 'comments/setIsCommentsLoaded',
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {
  ActionType
};

export type {
  ThunkActionResult
};
