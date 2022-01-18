import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { makeFakeComments } from '../../utils/mocks';
import ProductCardComments from './product-card-comments';

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
    isCommentsLoaded: true,
  },
});

describe('Component: ProductCardsComments', () => {

  it('should render ProductCardsComments', () => {
    render(
      <Provider store={store}>
        <ProductCardComments name={''} guitarId={''} />
      </Provider>);

    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].userName)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].advantage)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].disadvantage)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
    expect(screen.getByText(/Наверх/i)).toBeInTheDocument();
  });

});

