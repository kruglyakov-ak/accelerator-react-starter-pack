import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { AppRoute, DefaultPriceRange } from '../../const';
import { makeFakeGuitars } from '../../utils/mocks';
import App from './app';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const guitars = makeFakeGuitars();

const store = mockStore({
  DATA: {
    guitars: guitars,
    guitarsWithoutFilters: guitars,
    guitar: guitars[0],
  },
  FILTER: {
    priceRangeMin: DefaultPriceRange.Min,
    priceRangeMax: DefaultPriceRange.Max,
  },
  PAGINATION: {
    guitarsCount: 0,
  },
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);

    expect(screen.getByText(/Каталог гитар/i)).toBeInTheDocument();
    expect(screen.getByText(/Фильтр/i)).toBeInTheDocument();
  });

  it('should render "cart" when user navigate to "/cart"', () => {
    history.push(AppRoute.Cart);
    render(fakeApp);
    expect(screen.getByText(/Промокод на скидку/i)).toBeInTheDocument();
  });

  it('should render "ProdactCard" when user navigate to "/product/:id"', () => {
    history.push(AppRoute.Product);
    render(fakeApp);

    expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
    expect(screen.getByText(/Тип/i)).toBeInTheDocument();
    expect(screen.getByText(/Количество струн/i)).toBeInTheDocument();
  });
});
