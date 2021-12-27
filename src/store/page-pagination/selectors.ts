import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getGuitarsCount= (state: State): number => state[NameSpace.Pagination].guitarsCount;
const getCurrentPageNumber= (state: State): number => state[NameSpace.Pagination].currentPageNumber;

export {
  getGuitarsCount,
  getCurrentPageNumber
};
