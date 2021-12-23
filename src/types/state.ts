import { OrderType, SortType } from '../const';
import { Guitar } from './guitar';

type State = {
  guitars: Guitar[],
  guitar: Guitar | null,
  sortType: SortType,
  orderType: OrderType,
  priceRangeMin: number,
  priceRangeMax: number,
};

export type {
  State
};
