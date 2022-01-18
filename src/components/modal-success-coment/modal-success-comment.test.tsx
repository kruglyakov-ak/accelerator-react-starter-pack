import { render, screen } from '@testing-library/react';
import ModalSuccessComment from './modal-success-comment';

describe('Component: ModalSuccessComment', () => {

  it('should render ModalSuccessComment', () => {
    render(
      <ModalSuccessComment isModalSuccessOpen handleSuccessModalClose={function (): void {
        throw new Error('Function not implemented.');
      }}
      />);

    expect(screen.getByText(/Спасибо за ваш отзыв!/i)).toBeInTheDocument();
    expect(screen.getByText(/К покупкам!/i)).toBeInTheDocument();
  });

});

