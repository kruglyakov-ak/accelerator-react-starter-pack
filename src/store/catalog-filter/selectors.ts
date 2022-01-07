import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getPriceRangeMin = (state: State): number => state[NameSpace.Filter].priceRangeMin;
const getPriceRangeMax = (state: State): number => state[NameSpace.Filter].priceRangeMax;
const getUserPriceMin = (state: State): string => state[NameSpace.Filter].userPriceMin;
const getUserPriceMax = (state: State): string => state[NameSpace.Filter].userPriceMax;
const getIsAcousticCheck = (state: State): boolean => state[NameSpace.Filter].isAcousticCheck;
const getIsElectricCheck = (state: State): boolean => state[NameSpace.Filter].isElectricCheck;
const getIsUkuleleCheck = (state: State): boolean => state[NameSpace.Filter].isUkuleleCheck;

export {
  getPriceRangeMin,
  getPriceRangeMax,
  getUserPriceMin,
  getUserPriceMax,
  getIsAcousticCheck,
  getIsElectricCheck,
  getIsUkuleleCheck
};
