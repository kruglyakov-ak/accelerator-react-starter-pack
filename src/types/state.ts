import { SortType } from '../const';
import { Guitar } from './guitar';

type State = {
  guitars: Guitar[],
  guitar: Guitar | null,
  sortType: SortType,
};

export type {
  State
};
