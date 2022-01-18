import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import ProductCardItem from './prodact-card-item';
import { GuitarType } from '../../const';

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

describe('Component: ProductCardItem', () => {

  it('should render ProductCardItem', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ProductCardItem guitar={{
            id: 0,
            name: 'Гитара',
            vendorCode: '',
            type: GuitarType.Electric,
            description: '',
            previewImg: '',
            stringCount: 0,
            rating: 0,
            price: 1000,
          }}
          comments={[]}
          />
        </Router>
      </Provider>);

    expect(screen.getByText(/Гитара/i)).toBeInTheDocument();
    expect(screen.getByText(/1000/i)).toBeInTheDocument();
  });

});
