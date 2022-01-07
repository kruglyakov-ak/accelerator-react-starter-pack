import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MainPage from './main-page-empty';

const history = createMemoryHistory();
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
  DATA: {
    guitars: [],
  },
  PAGINATION:{
    guitarsCount: 0,
  },
});

describe('Component: MainPageEmpty', () => {

  it('should render MainPageEmpty', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>);

    expect(screen.getByText(/Каталог гитар не загрузился/i)).toBeInTheDocument();
  });

});
