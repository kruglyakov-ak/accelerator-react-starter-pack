import { OrderType, SortType } from '../const';
import { Guitar } from './guitar';

type State = {
  guitars: Guitar[],
  guitar: Guitar | null,
  sortType: SortType,
  orderType: OrderType,
  priceRangeMin: number,
  priceRangeMax: number,
  userPriceMin: string,
  userPriceMax: string,
  isAcousticCheck: boolean,
  isElectricCheck: boolean,
  isUkuleleCheck: boolean,
  isFourStringsCheck: boolean,
  isSixStringsCheck: boolean,
  isSevenStringsCheck: boolean,
  isTwelveStringsCheck: boolean,
};

export type {
  State
};
