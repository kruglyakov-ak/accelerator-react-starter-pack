import { Guitar } from '../../types/guitar';
import { GuitarInCartCount } from '../../types/guitar-in-cart-count';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getGuitarsInCart = (state: State): Guitar[] => state[NameSpace.Cart].guitarsInCart;
const getTotalPrice = (state: State): number => state[NameSpace.Cart].totalPrice;
const getGuitarsInCartCount = (state: State): GuitarInCartCount[] => state[NameSpace.Cart].guitarsInCartCount;
const getDiscount = (state: State): number => state[NameSpace.Cart].discount;

export {
  getGuitarsInCart,
  getTotalPrice,
  getGuitarsInCartCount,
  getDiscount
};
