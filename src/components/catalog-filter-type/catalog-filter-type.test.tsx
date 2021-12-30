import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import CatalogFilterType from './catalog-filter-type';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  FILTER: {
  },
});
describe('Component: CatalogFilterType', () => {

  it('should render CatalogFilterType', () => {
    render(
      <Provider store={store}>
        <CatalogFilterType />
      </Provider>);

    expect(screen.getByText(/Тип гитар/i)).toBeInTheDocument();
  });

});
