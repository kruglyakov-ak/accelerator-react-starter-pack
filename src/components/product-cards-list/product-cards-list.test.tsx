import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ProductCardsList from './product-cards-list';
import { makeFakeGuitars } from '../../utils/mocks';
import { Comment } from '../../types/comment';

const guitars = makeFakeGuitars();
const comments: Comment[] = [];
const history = createMemoryHistory();

describe('Component: ProductCardsList', () => {

  it('should render ProductCardsList', () => {
    render(
      <Router history={history}>
        <ProductCardsList guitars={guitars} comments={comments}/>
      </Router>);

    expect(screen.getByText(guitars[0].name)).toBeInTheDocument();
    expect(screen.getByText(guitars[guitars.length - 1].name)).toBeInTheDocument();
  });

});
