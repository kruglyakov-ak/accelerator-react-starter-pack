import { makeFakeGuitars } from '../../utils/mocks';
import { deleteGuitarInCart, setGuitarsInCart, setTotalPrice } from '../action';
import { cartData } from './cart-data';
const guitars = makeFakeGuitars();

describe('Reducer: cartData', () => {
  it('without additional parameters should return initial state', () => {
    expect(cartData(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        guitarsInCart: [],
        totalPrice: 0,
        guitarsInCartCount: [],
        discount: 0,
      });
  });

  it('should update guitars in cart by setGuitarsInCart', () => {
    const state = {
      guitarsInCart: [],
      totalPrice: 0,
      guitarsInCartCount: [],
      discount: 0,
    };
    expect(cartData(state, setGuitarsInCart(guitars[0])))
      .toEqual({
        guitarsInCart: [guitars[0]],
        totalPrice: 0,
        guitarsInCartCount: [],
        discount: 0,
      });
  });

  it('should delete guitars in cart by deleteGuitarInCart', () => {
    const state = {
      guitarsInCart: [guitars[0]],
      totalPrice: 0,
      guitarsInCartCount: [],
      discount: 0,
    };
    expect(cartData(state, deleteGuitarInCart(guitars[0])))
      .toEqual({
        guitarsInCart: [],
        totalPrice: 0,
        guitarsInCartCount: [],
        discount: 0,
      });
  });

  it('should update total price by setTotalPrices', () => {
    const state = {
      guitarsInCart: [],
      totalPrice: 0,
      guitarsInCartCount: [],
      discount: 0,
    };
    expect(cartData(state, setTotalPrice(1000)))
      .toEqual({
        guitarsInCart: [],
        totalPrice: 1000,
        guitarsInCartCount: [],
        discount: 0,
      });
  });
});
