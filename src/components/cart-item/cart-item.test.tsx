import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { makeFakeGuitars } from '../../utils/mocks';
import CartItem from './cart-item';

const history = createMemoryHistory();
const guitars = makeFakeGuitars();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  CART: {
    guitarsInCart: guitars,
  },
});
describe('Component: CartItem', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CartItem guitar={guitars[0]} />
        </Router>
      </Provider>);

    expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
    expect(screen.getByText(guitars[0].name)).toBeInTheDocument();
  });

});
