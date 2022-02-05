import { render, screen } from '@testing-library/react';
import { makeFakeGuitars } from '../../utils/mocks';
import ModalAddToCart from './modal-add-to-cart';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';

const guitars = makeFakeGuitars();
const onAddToCardModalClose = jest.fn();
const onSuccessModalOpen = jest.fn();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  CART: {},
});
describe('Component: ModalAddToCart', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ModalAddToCart guitar={guitars[0]} onAddToCardModalClose={onAddToCardModalClose} onSuccessModalOpen={onSuccessModalOpen} />
      </Provider>);

    expect(screen.getByText(guitars[0].name)).toBeInTheDocument();
    expect(screen.getByText(/Добавить в корзину/i)).toBeInTheDocument();
  });

});
