import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import CatalogSort from './catalog-sort';
import { OrderType, SortType } from '../../const';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  SORT: {
    sortType: SortType.Default,
    orderType: OrderType.Default,
  },
});
describe('Component: CatalogSort', () => {

  it('should render CatalogSort', () => {
    render(
      <Provider store={store}>
        <CatalogSort />
      </Provider>);

    expect(screen.getByText(/По цене/i)).toBeInTheDocument();
    expect(screen.getByText(/По популярности/i)).toBeInTheDocument();
  });

});
