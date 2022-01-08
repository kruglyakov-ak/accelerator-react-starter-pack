import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getPriceRangeMin = (state: State): number => state[NameSpace.Filter].priceRangeMin;
const getPriceRangeMax = (state: State): number => state[NameSpace.Filter].priceRangeMax;

export {
  getPriceRangeMin,
  getPriceRangeMax
};
