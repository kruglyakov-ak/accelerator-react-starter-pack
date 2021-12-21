import { SortType } from '../const';
import { Guitar } from '../types/guitar';
import { State } from '../types/state';

const getGuitars = (state: State): Guitar[] => state.guitars;
const getGuitarById = (state: State): Guitar | null => state.guitar;
const getSortType = (state: State): SortType => state.sortType;

export {
  getGuitars,
  getGuitarById,
  getSortType
};
