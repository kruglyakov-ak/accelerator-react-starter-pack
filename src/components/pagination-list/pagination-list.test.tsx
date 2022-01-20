import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import PaginationList from './pagination-list';
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
  PAGINATION: {
    guitarsCount: 27,
  },
});
const history = createMemoryHistory();


describe('Component: PaginationList', () => {

  it('should render PaginationList', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PaginationList />
        </Router>
      </Provider >);

    expect(screen.getByText(/Далее/i)).toBeInTheDocument();
  });

});
