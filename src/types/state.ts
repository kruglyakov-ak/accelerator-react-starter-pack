import { RootState } from '../store/root-reducer';
import { Guitar } from './guitar';

type State = RootState;

type GuitarData = {
  guitars: Guitar[],
  guitarsOnPage: Guitar[],
  guitarsWithoutFilters: Guitar[],
  guitar: Guitar | null,
};

type CatalogFilter = {
  priceRangeMin: number,
  priceRangeMax: number,
};

type PagePagination = {
  guitarsCount: number,
};

export type {
  State,
  GuitarData,
  CatalogFilter,
  PagePagination
};
