import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getGuitarsInCart = (state: State): Guitar[] => state[NameSpace.Cart].guitarsInCart;
const getTotalPrices = (state: State): number[] => state[NameSpace.Cart].totalPrices;

export {
  getGuitarsInCart,
  getTotalPrices
};
