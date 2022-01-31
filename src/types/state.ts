import { RootState } from '../store/root-reducer';
import { Comment } from './comment';
import { Guitar } from './guitar';

type State = RootState;

type GuitarData = {
  guitars: Guitar[],
  guitarsOnPage: Guitar[],
  guitarsWithoutFilters: Guitar[],
  guitar: Guitar | null,
  isDataLoaded: boolean,
  isProductCardLoaded: boolean,
};

type CartData = {
  guitarsInCart: Guitar[],
  totalPrices: number[],
};

type CatalogFilter = {
  priceRangeMin: number,
  priceRangeMax: number,
};

type PagePagination = {
  guitarsCount: number,
};

type CommentData = {
  comments: Comment[],
  commentsByGuitarId: Comment[],
  isCommentsLoaded: boolean
};

export type {
  State,
  GuitarData,
  CatalogFilter,
  PagePagination,
  CommentData,
  CartData
};
