import { APIRoute, FilterPath, GUITARS_ON_PAGE, GuitarType, OrderTypePath, SortTypePath, StringCount, StringCountNumber } from '../const';
import { ThunkActionResult } from '../types/action';
import { loadGuitarById, loadGuitars, loadGuitarsWithoutFilters, setGuitarsCount, setPriceRangeMax, setPriceRangeMin, loadGuitarsOnPage } from './action';
import { Guitar } from '../types/guitar';
import { FetchGuitarProperty } from '../types/fetch-guitar-property';

const fetchGuitarsAction = (fetchProperty: FetchGuitarProperty): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {
      sortType,
      orderType,
      userPriceMin,
      userPriceMax,
      isAcousticCheck,
      isElectricCheck,
      isUkuleleCheck,
      isFourStringsCheck,
      isSixStringsCheck,
      isSevenStringsCheck,
      isTwelveStringsCheck,
    } = fetchProperty;

    let path = `${APIRoute.Guitars}?`;

    if (sortType) {
      path += SortTypePath[sortType];
    }
    if (orderType) {
      path += OrderTypePath[orderType];
    }
    if (userPriceMin) {
      path += `${FilterPath.PriceGte}${userPriceMin}`;
    }
    if (userPriceMax) {
      path += `${FilterPath.PriceLte}${userPriceMax}`;
    }
    if (isAcousticCheck) {
      path += `${FilterPath.Type}${GuitarType.Acoustic}`;
    }
    if (isElectricCheck) {
      path += `${FilterPath.Type}${GuitarType.Electric}`;
    }
    if (isUkuleleCheck) {
      path += `${FilterPath.Type}${GuitarType.Ukulele}`;
    }
    if (isFourStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.FourStrings]}`;
    }
    if (isSixStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.SixStrings]}`;
    }
    if (isSevenStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.SevenStrings]}`;
    }
    if (isTwelveStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.TwelveStrings]}`;
    }
    const { data } = await api.get<Guitar[]>(path);
    dispatch(loadGuitars(data));
    if (
      isAcousticCheck ||
      isElectricCheck ||
      isUkuleleCheck ||
      isFourStringsCheck ||
      isSixStringsCheck ||
      isSevenStringsCheck ||
      isTwelveStringsCheck) {
      dispatch(setPriceRangeMin(data.slice().sort((a, b) => a.price - b.price)[0].price));
      dispatch(setPriceRangeMax(data.slice().sort((a, b) => b.price - a.price)[0].price));
    }
  };

const fetchGuitarsOnPageAction = (fetchProperty: FetchGuitarProperty, currentPageNumber: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {
      sortType,
      orderType,
      userPriceMin,
      userPriceMax,
      isAcousticCheck,
      isElectricCheck,
      isUkuleleCheck,
      isFourStringsCheck,
      isSixStringsCheck,
      isSevenStringsCheck,
      isTwelveStringsCheck,
    } = fetchProperty;

    let path = `${APIRoute.Guitars}?${FilterPath.PaginationStart}${currentPageNumber * GUITARS_ON_PAGE}${FilterPath.PaginationEnd}${(currentPageNumber + 1) * GUITARS_ON_PAGE}`;

    if (sortType) {
      path += SortTypePath[sortType];
    }
    if (orderType) {
      path += OrderTypePath[orderType];
    }
    if (userPriceMin) {
      path += `${FilterPath.PriceGte}${userPriceMin}`;
    }
    if (userPriceMax) {
      path += `${FilterPath.PriceLte}${userPriceMax}`;
    }
    if (isAcousticCheck) {
      path += `${FilterPath.Type}${GuitarType.Acoustic}`;
    }
    if (isElectricCheck) {
      path += `${FilterPath.Type}${GuitarType.Electric}`;
    }
    if (isUkuleleCheck) {
      path += `${FilterPath.Type}${GuitarType.Ukulele}`;
    }
    if (isFourStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.FourStrings]}`;
    }
    if (isSixStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.SixStrings]}`;
    }
    if (isSevenStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.SevenStrings]}`;
    }
    if (isTwelveStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.TwelveStrings]}`;
    }

    const { data, headers } = await api.get<Guitar[]>(path);
    dispatch(loadGuitarsOnPage(data));
    dispatch(setGuitarsCount(+headers['x-total-count']));
  };

const fetchGuitarByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar>(`${APIRoute.Guitars}/${id}`);
    dispatch(loadGuitarById(data));
  };


const fetchGuitarWithoutFilters = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar[]>(APIRoute.Guitars);
    dispatch(loadGuitarsWithoutFilters(data));
    dispatch(setPriceRangeMin(data.slice().sort((a, b) => a.price - b.price)[0].price));
    dispatch(setPriceRangeMax(data.slice().sort((a, b) => b.price - a.price)[0].price));
  };

export {
  fetchGuitarsAction,
  fetchGuitarByIdAction,
  fetchGuitarWithoutFilters,
  fetchGuitarsOnPageAction
};
