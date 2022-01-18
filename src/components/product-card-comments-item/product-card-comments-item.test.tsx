import { render, screen } from '@testing-library/react';
import { makeFakeComments } from '../../utils/mocks';
import ProductCardCommentsItem from './product-card-comments-item';

const mockComments = makeFakeComments();

describe('Component: ProductCardsCommentsItem', () => {

  it('should render ProductCardsCommentsItem', () => {
    render(<ProductCardCommentsItem review={mockComments[0]} />);

    expect(screen.getByText(mockComments[0].userName)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].advantage)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].disadvantage)).toBeInTheDocument();
  });

});

