import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute, DefaultPriceRange } from '../../const';
import { render, screen } from '@testing-library/react';
import App from './app';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { Action } from 'redux';
import { makeFakeComments, makeFakeGuitars } from '../../utils/mocks';

const history = createMemoryHistory();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const guitars = makeFakeGuitars();
const comments = makeFakeComments();

const store = mockStore({
  DATA: {
    guitars: guitars,
    guitarsOnPage: guitars,
    guitarsWithoutFilters: guitars,
    guitar: guitars[0],
    isDataLoaded: true,
    isProductCardLoaded: true,
  },
  COMMENT: {
    comments: comments,
    commentsByGuitarId: comments,
    isCommentsLoaded: true,
  },
  FILTER: {
    priceRangeMin: DefaultPriceRange.Min,
    priceRangeMax: DefaultPriceRange.Max,
  },
  PAGINATION: {
    guitarsCount: 0,
  },
});

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
    expect(screen.getByText(/Сортировать:/i)).toBeInTheDocument();
    expect(screen.getByText(guitars[0].name)).toBeInTheDocument();
  });

  it('should render "cart" when user navigate to "/cart"', () => {
    history.push(AppRoute.Cart);
    render(fakeApp);
    expect(screen.getByText(/Промокод на скидку/i)).toBeInTheDocument();
  });

  it('should render "ProdactCard" when user navigate to "/product/:id"', () => {
    // eslint-disable-next-line no-console
    console.log(history);
    history.push(AppRoute.Product);
    render(fakeApp);

    expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
    expect(screen.getByText(/Тип/i)).toBeInTheDocument();
    expect(screen.getByText(/Количество струн/i)).toBeInTheDocument();
  });
});

