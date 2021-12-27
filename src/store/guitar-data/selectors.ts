import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getGuitars = (state: State): Guitar[] => state[NameSpace.Data].guitars;
const getGuitarsWithoutFilters = (state: State): Guitar[] => state[NameSpace.Data].guitarsWithoutFilters;
const getGuitarById = (state: State): Guitar | null => state[NameSpace.Data].guitar;

export {
  getGuitars,
  getGuitarsWithoutFilters,
  getGuitarById
};
