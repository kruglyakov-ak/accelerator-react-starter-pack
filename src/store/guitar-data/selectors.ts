import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getGuitars = (state: State): Guitar[] => state[NameSpace.Data].guitars;
const getGuitarsWithoutFilters = (state: State): Guitar[] => state[NameSpace.Data].guitarsWithoutFilters;
const getGuitarsOnPage = (state: State): Guitar[] => state[NameSpace.Data].guitarsOnPage;
const getGuitarById = (state: State): Guitar | null => state[NameSpace.Data].guitar;
const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export {
  getGuitars,
  getGuitarsWithoutFilters,
  getGuitarById,
  getGuitarsOnPage,
  getIsDataLoaded
};
