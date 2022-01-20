import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import CatalogFilterStringCount from './catalog-filter-string-count';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

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
const history = createMemoryHistory();

describe('Component: CatalogFilterStringCount', () => {

  it('should render CatalogFilterStringCount', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CatalogFilterStringCount />
        </Router>
      </Provider>);

    expect(screen.getByText(/Количество струн/i)).toBeInTheDocument();
  });

});
