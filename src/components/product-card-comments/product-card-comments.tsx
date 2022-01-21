import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsCommentsLoaded } from '../../store/comment-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import ModalNewComment from '../modal-new-comment/modal-new-comment';
import ModalSuccessComment from '../modal-success-coment/modal-success-comment';
import ProductCardCommentsList from '../product-card-comments-list/product-card-comments-list';

type ProductCardCommentsProps = {
  name: string,
  guitarId: string,
}

function ProductCardComments({ name, guitarId }: ProductCardCommentsProps): JSX.Element {
  const isCommentsLoaded = useSelector(getIsCommentsLoaded);
  const [isModalReviewFormOpen, setIsModalReviewFormOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

  const handleEscapeKeyDown = useCallback((evt: { key: string; }) => {
    if (evt.key === 'Escape') {
      setIsModalReviewFormOpen(false);
      setIsModalSuccessOpen(false);
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
      document.body.classList.remove('unscrollable');
    }
  }, []);

  const handleNewReviewButtonClick = () => {
    document.body.classList.add('unscrollable');
    setIsModalReviewFormOpen(true);
  };

  const onReviewModalClose = () => {
    document.body.classList.remove('unscrollable');
    document.body.removeEventListener('keydown', handleEscapeKeyDown);
    setIsModalReviewFormOpen(false);
  };

  const onSuccessModalClose = () => {
    document.body.classList.remove('unscrollable');
    document.body.removeEventListener('keydown', handleEscapeKeyDown);
    setIsModalSuccessOpen(false);
  };

  const onSuccessModalOpen = () => {
    document.body.classList.add('unscrollable');
    setIsModalSuccessOpen(true);
  };

  useEffect(() => {
    isModalReviewFormOpen ?
      document.body.addEventListener('keydown', handleEscapeKeyDown) :
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
  }, [handleEscapeKeyDown, isModalReviewFormOpen]);

  useEffect(() => {
    isModalSuccessOpen ?
      document.body.addEventListener('keydown', handleEscapeKeyDown) :
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
  }, [handleEscapeKeyDown, isModalSuccessOpen]);

  if (!isCommentsLoaded) {
    return (
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <LoadingScreen />
      </section>
    );
  }

  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <button className="button button--red-border button--big reviews__sumbit-button" onClick={handleNewReviewButtonClick}>Оставить отзыв</button>
      <ProductCardCommentsList />
      {<ModalNewComment guitarId={guitarId} isModalReviewFormOpen={isModalReviewFormOpen} name={name} onReviewModalClose={onReviewModalClose} onSuccessModalOpen={onSuccessModalOpen} />}
      {<ModalSuccessComment isModalSuccessOpen={isModalSuccessOpen} onSuccessModalClose={onSuccessModalClose} />}
    </section>
  );
}

export default ProductCardComments;
