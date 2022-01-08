import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getGuitarsCount= (state: State): number => state[NameSpace.Pagination].guitarsCount;

export {
  getGuitarsCount
};
