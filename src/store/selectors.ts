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
const getIsAcousticCheck = (state: State): boolean => state.isAcousticCheck;
const getIsElectricCheck = (state: State): boolean => state.isElectricCheck;
const getIsUkuleleCheck = (state: State): boolean => state.isUkuleleCheck;

export {
  getGuitars,
  getGuitarById,
  getSortType,
  getOrderType,
  getPriceRangeMin,
  getPriceRangeMax,
  getUserPriceMin,
  getUserPriceMax,
  getIsAcousticCheck,
  getIsElectricCheck,
  getIsUkuleleCheck
};
