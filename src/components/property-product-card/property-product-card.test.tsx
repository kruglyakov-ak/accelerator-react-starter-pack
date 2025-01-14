import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeGuitars } from '../../utils/mocks';
import PropertyProductCard from './property-product-card';
import { changeGuitarTypeToReadable } from '../../utils/utils';

const guitars = makeFakeGuitars();
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
    guitar: guitars[0],
    isProductCardLoaded: true,
  },
  COMMENT: {
    commentsByGuitarId: [],
    isCommentsLoaded: true,
  },
  CART: {
    guitarsInCart: [],
  },
});

describe('Component: PropertyProductCard', () => {

  it('should render PropertyProductCard', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyProductCard />
        </Router>
      </Provider>);

    expect(screen.getByText(guitars[0].vendorCode)).toBeInTheDocument();
    expect(screen.getByText(changeGuitarTypeToReadable(guitars[0].type))).toBeInTheDocument();
  });

});
