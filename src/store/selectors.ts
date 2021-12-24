import { OrderType, SortType } from '../const';
import { Guitar } from '../types/guitar';
import { State } from '../types/state';

const getGuitars = (state: State): Guitar[] => state.guitars;
const getGuitarById = (state: State): Guitar | null => state.guitar;
const getSortType = (state: State): SortType => state.sortType;
const getOrderType = (state: State): OrderType => state.orderType;
const getPriceRangeMin = (state: State): number => state.priceRangeMin;
const getPriceRangeMax = (state: State): number => state.priceRangeMax;
const getUserPriceMin = (state: State): string => state.userPriceMin;
const getUserPriceMax = (state: State): string => state.userPriceMax;

export {
  getGuitars,
  getGuitarById,
  getSortType,
  getOrderType,
  getPriceRangeMin,
  getPriceRangeMax,
  getUserPriceMin,
  getUserPriceMax
};
