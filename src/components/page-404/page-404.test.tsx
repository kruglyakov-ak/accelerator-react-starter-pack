import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import Page404 from './page-404';

const history = createMemoryHistory();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  DATA: {
  },
});

describe('Component: Page404', () => {

  it('should render Page404', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Page404 />
        </Router>
      </Provider>);

    expect(screen.getByText(/Ошибка 404./i)).toBeInTheDocument();
  });

});
