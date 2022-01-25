import { render, screen } from '@testing-library/react';
import ModalSuccessComment from './modal-success-comment';

const onFakeHandleSuccessModalClose = jest.fn();

describe('Component: ModalSuccessComment', () => {

  it('should render ModalSuccessComment', () => {
    render(
      <ModalSuccessComment onSuccessModalClose={onFakeHandleSuccessModalClose}/>);

    expect(screen.getByText(/Спасибо за ваш отзыв!/i)).toBeInTheDocument();
    expect(screen.getByText(/К покупкам!/i)).toBeInTheDocument();
  });

});

