import { Guitar } from './guitar';

type State = {
  guitars: Guitar[],
  guitar: Guitar | null,
  sortType: string,
  orderType: string,
};

export type {
  State
};
