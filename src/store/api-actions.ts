import { APIRoute, FilterPath, GuitarType, OrderType, OrderTypePath, SortType, SortTypePath, StringCount, StringCountNumber } from '../const';
import { ThunkActionResult } from '../types/action';
import { loadGuitarById, loadGuitars, setPriceRangeMax, setPriceRangeMin } from './action';
import { Guitar } from '../types/guitar';

const fetchGuitarsAction = (
  sortType: SortType,
  orderType: OrderType,
  userPriceMin: string,
  userPriceMax: string,
  isAcousticCheck: boolean,
  isElectricCheck: boolean,
  isUkuleleCheck: boolean,
  setIsFourStringsCheck: boolean,
  setIsSixStringsCheck: boolean,
  setIsSevenStringsCheck: boolean,
  setIsTwelveStringsCheck: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
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
    if (setIsFourStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.FourStrings]}`;
    }
    if (setIsSixStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.SixStrings]}`;
    }
    if (setIsSevenStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.SevenStrings]}`;
    }
    if (setIsTwelveStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber[StringCount.TwelveStrings]}`;
    }
    const { data } = await api.get<Guitar[]>(path);
    dispatch(loadGuitars(data));
    dispatch(setPriceRangeMin(data.slice().sort((a, b) => a.price - b.price)[0].price));
    dispatch(setPriceRangeMax(data.slice().sort((a, b) => b.price - a.price)[0].price));
  };

const fetchGuitarByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar>(`${APIRoute.Guitars}/${id}`);
    dispatch(loadGuitarById(data));
  };

export {
  fetchGuitarsAction,
  fetchGuitarByIdAction
};
