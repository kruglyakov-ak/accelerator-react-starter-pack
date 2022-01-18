import { render, screen } from '@testing-library/react';
import ModalNewComment from './modal-new-comment';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';

const onFakeHandleReviewModalClose = jest.fn();
const onFakeHandleSuccessModalOpen = jest.fn();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
});

describe('Component: ModalNewComment', () => {

  it('should render ModalNewComment', () => {
    render(
      <Provider store={store}>
        <ModalNewComment isModalReviewFormOpen={false} name={'Guitar'} guitarId={''} handleReviewModalClose={onFakeHandleReviewModalClose} handleSuccessModalOpen={onFakeHandleSuccessModalOpen} />
      </Provider>);

    expect(screen.getByText(/Guitar/i)).toBeInTheDocument();
    expect(screen.getByText(/Ваше Имя/i)).toBeInTheDocument();
    expect(screen.getByText(/Ваша Оценка/i)).toBeInTheDocument();
  });

});

