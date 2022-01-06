import { OrderType, SortType } from '../const';

type FetchGuitarProperty = {
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
};

export type {
  FetchGuitarProperty
};
