import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from './state';

enum ActionType {
  LoadGuitars = 'data/loadGuitars',
  LoadGuitarById = 'data/loadGuitarById',
  LoadGuitarsWithoutFilters = 'data/loadGuitarsWithoutFilters',
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
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {
  ActionType
};

export type {
  ThunkActionResult
};
