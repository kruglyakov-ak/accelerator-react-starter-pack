import { OrderType, SortType } from '../const';

type FetchGuitarProperty = {
  sortType: SortType | string,
  orderType: OrderType | string,
  userPriceMin: string,
  userPriceMax: string,
  isAcousticCheck: boolean,
  isElectricCheck: boolean,
  isUkuleleCheck: boolean,
  isFourStringsCheck: boolean,
  isSixStringsCheck: boolean,
  isSevenStringsCheck: boolean,
  isTwelveStringsCheck: boolean,
  currentPageNumber: number
};

export type {
  FetchGuitarProperty
};
