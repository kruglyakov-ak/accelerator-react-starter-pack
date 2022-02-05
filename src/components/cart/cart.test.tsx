import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import Cart from './cart';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  DATA: { guitars: [] },
  CART: {
    guitarsInCart: [],
    totalPrice: 0,
  },
});
describe('Component: Cart', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Cart />
        </Router>
      </Provider>);

    expect(screen.getByText(/Промокод на скидку/i)).toBeInTheDocument();
    expect(screen.getByText(/Введите свой промокод, если он у вас есть./i)).toBeInTheDocument();
    expect(screen.getByText(/К оплате/i)).toBeInTheDocument();
  });

});
