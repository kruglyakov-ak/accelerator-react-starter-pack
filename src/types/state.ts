import { OrderType, SortType } from '../const';
import { RootState } from '../store/root-reducer';
import { Guitar } from './guitar';

type State = RootState;

type GuitarData = {
  guitars: Guitar[],
  guitarsOnPage: Guitar[],
  guitarsWithoutFilters: Guitar[],
  guitar: Guitar | null,
};

type CatalogSort = {
  sortType: SortType,
  orderType: OrderType,
};

type CatalogFilter = {
  priceRangeMin: number,
  priceRangeMax: number,
  userPriceMin: string,
  userPriceMax: string,
  isAcousticCheck: boolean,
  isElectricCheck: boolean,
  isUkuleleCheck: boolean,
};

type PagePagination = {
  guitarsCount: number,
  currentPageNumber: number,
};

export type {
  State,
  GuitarData,
  CatalogSort,
  CatalogFilter,
  PagePagination
};
