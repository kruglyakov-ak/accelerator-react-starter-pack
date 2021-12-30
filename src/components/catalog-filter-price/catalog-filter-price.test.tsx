import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { DefaultPriceRange } from '../../const';
import CatalogFilterPrice from './catalog-filter-price';

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
describe('Component: Cart', () => {

  it('should render CatalogFilterPrice', () => {
    render(
      <Provider store={store}>
        <CatalogFilterPrice />
      </Provider>);

    expect(screen.getByPlaceholderText(DefaultPriceRange.Min)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(DefaultPriceRange.Max)).toBeInTheDocument();
  });

});
