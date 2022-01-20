import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { DefaultPriceRange } from '../../const';
import CatalogFilterPrice from './catalog-filter-price';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  FILTER: {
    priceRangeMin: DefaultPriceRange.Min,
    priceRangeMax: DefaultPriceRange.Max,
  },
});
const history = createMemoryHistory();

describe('Component: CatalogFilterPrice', () => {

  it('should render CatalogFilterPrice', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CatalogFilterPrice />
        </Router>
      </Provider>);

    expect(screen.getByPlaceholderText(DefaultPriceRange.Min)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(DefaultPriceRange.Max)).toBeInTheDocument();
  });

});
