import { Guitar } from '../types/guitar';
import { State } from '../types/state';

const getGuitars = (state: State): Guitar[] => state.guitars;
const getGuitarById = (state: State): Guitar | null => state.guitar;
const getSortType = (state: State): string => state.sortType;
const getOrderType = (state: State): string => state.orderType;

export {
  getGuitars,
  getGuitarById,
  getSortType,
  getOrderType
};
