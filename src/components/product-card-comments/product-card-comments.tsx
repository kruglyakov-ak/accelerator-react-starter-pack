import { useCallback, useEffect, useState } from 'react';
import ModalNewComment from '../modal-new-comment/modal-new-comment';
import ProductCardCommentsList from '../product-card-comments-item/product-card-comments-list';

type ProductCardCommentsProps = {
  name: string
}

function ProductCardComments({ name }: ProductCardCommentsProps): JSX.Element {
  const [isModalReviewFormOpen, setIsModalReviewFormOpen] = useState(false);

  const handleEscapeKeyDown = useCallback((evt: { key: string; }) => {
    if (evt.key === 'Escape') {
      setIsModalReviewFormOpen(false);
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
      document.body.classList.remove('unscrollable');
    }
  }, []);

  const handleNewReviewButtonClick = () => {
    document.body.classList.add('unscrollable');
    setIsModalReviewFormOpen(true);
  };

  const handleCloseModal = () => {
    document.body.classList.remove('unscrollable');
    document.body.removeEventListener('keydown', handleEscapeKeyDown);
    setIsModalReviewFormOpen(false);
  };

  useEffect(() => {
    isModalReviewFormOpen ?
      document.body.addEventListener('keydown', handleEscapeKeyDown) :
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
  }, [handleEscapeKeyDown, isModalReviewFormOpen]);

  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <button className="button button--red-border button--big reviews__sumbit-button" onClick={handleNewReviewButtonClick}>Оставить отзыв</button>
      <ProductCardCommentsList />
      {<ModalNewComment isModalReviewFormOpen={isModalReviewFormOpen} name={name} handleCloseModal={handleCloseModal} />}
    </section>
  );
}

export default ProductCardComments;
