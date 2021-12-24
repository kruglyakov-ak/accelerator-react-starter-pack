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
};

export type {
  State
};
