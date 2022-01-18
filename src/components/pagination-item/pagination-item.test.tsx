import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import PaginationItem from './pagination-item';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const history = createMemoryHistory();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore();

describe('Component: PaginationItem', () => {

  it('should render PaginationItem', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PaginationItem pageCount={0} activePage={0} />
        </Router>
      </Provider>);

    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

});
