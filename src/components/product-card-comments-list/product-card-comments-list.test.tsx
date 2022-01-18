import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import ProductCardCommentsList from './product-card-comments-list';
import { makeFakeComments } from '../../utils/mocks';

const mockComments = makeFakeComments();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  COMMENT: {
    comments: mockComments,
    commentsByGuitarId: mockComments,
    isCommentsLoaded: false,
  },
});

describe('Component: ProductCardsCommentsList', () => {

  it('should render ProductCardsCommentsList', () => {
    render(
      <Provider store={store}>
        <ProductCardCommentsList />
      </Provider>);

    expect(screen.getByText(mockComments[0].userName)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].advantage)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].disadvantage)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
    expect(screen.getByText(/Наверх/i)).toBeInTheDocument();
  });

});

