import { APIRoute, FilterPath, GUITARS_ON_PAGE, GuitarType, OrderType, OrderTypePath, SortType, SortTypePath, StringCount, StringCountNumber } from '../const';
import { ThunkActionResult } from '../types/action';
import { loadGuitarById, loadGuitars, setGuitarsCount, setPriceRangeMax, setPriceRangeMin } from './action';
import { Guitar } from '../types/guitar';

const fetchGuitarsAction = (
  sortType: SortType,
  orderType: OrderType,
  userPriceMin: string,
  userPriceMax: string,
  isAcousticCheck: boolean,
  isElectricCheck: boolean,
  isUkuleleCheck: boolean,
  isFourStringsCheck: boolean,
  isSixStringsCheck: boolean,
  isSevenStringsCheck: boolean,
  isTwelveStringsCheck: boolean,
  currentPageNumber: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    let path = `${APIRoute.Guitars}`;
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
    path += `${FilterPath.PaginationStart}${currentPageNumber * GUITARS_ON_PAGE}`;
    path += `${FilterPath.PaginationEnd}${(currentPageNumber + 1) * GUITARS_ON_PAGE}`;
    const { data, headers } = await api.get<Guitar[]>(path);
    dispatch(loadGuitars(data));
    dispatch(setGuitarsCount(headers['x-total-count']));
    dispatch(setPriceRangeMin(data.slice().sort((a, b) => a.price - b.price)[0].price));
    dispatch(setPriceRangeMax(data.slice().sort((a, b) => b.price - a.price)[0].price));
  };

const fetchGuitarByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar>(`${APIRoute.Guitars}/${id}`);
    dispatch(loadGuitarById(data));
  };


const fetchGuitarPriceRange = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar[]>(APIRoute.Guitars);
    dispatch(setPriceRangeMin(data.slice().sort((a, b) => a.price - b.price)[0].price));
    dispatch(setPriceRangeMax(data.slice().sort((a, b) => b.price - a.price)[0].price));
  };

export {
  fetchGuitarsAction,
  fetchGuitarByIdAction,
  fetchGuitarPriceRange
};
