import { render, screen } from '@testing-library/react';
import { makeFakeGuitars } from '../../utils/mocks';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import ModalDelete from './modal-delete';

const guitars = makeFakeGuitars();
const onDeleteModalClose = jest.fn();
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
describe('Component: ModalDelete', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ModalDelete guitar={guitars[0]} totalPrice={1000} onDeleteModalClose={onDeleteModalClose} />
      </Provider>);

    expect(screen.getByText(guitars[0].name)).toBeInTheDocument();
    expect(screen.getByText(/Удалить этот товар?/i)).toBeInTheDocument();
  });

});
