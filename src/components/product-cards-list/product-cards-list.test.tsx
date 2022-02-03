import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ProductCardsList from './product-cards-list';
import { makeFakeGuitars } from '../../utils/mocks';
import { Comment } from '../../types/comment';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';

const guitars = makeFakeGuitars();
const comments: Comment[] = [];
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
  CART: {
    guitarsInCart: [],
  },
});

describe('Component: ProductCardsList', () => {

  it('should render ProductCardsList', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ProductCardsList guitars={guitars} comments={comments} />
        </Router>
      </Provider>);

    expect(screen.getByText(guitars[0].name)).toBeInTheDocument();
    expect(screen.getByText(guitars[guitars.length - 1].name)).toBeInTheDocument();
  });

});
