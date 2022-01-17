import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MIN_COMMENT_LENGTH } from '../../const';
import { fetchCommentsByIdAction } from '../../store/api-actions';
import { getComments, getIsCommentsLoaded } from '../../store/comment-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import ProductCardCommentsItem from '../product-card-comments-list/product-card-comments-item';

type ProductCardCommentsListProps = {
  id: string
}

function ProductCardCommentsList({ id }: ProductCardCommentsListProps): JSX.Element {
  const dispatch = useDispatch();
  const comments = useSelector(getComments);
  const isCommentsLoaded = useSelector(getIsCommentsLoaded);
  const [isAllCommentsShow, setIsAllCommentsShow] = useState(false);

  const handleShowMoreClick = () => {
    setIsAllCommentsShow(true);
  };

  useEffect(() => {
    dispatch(fetchCommentsByIdAction(+id));
  }, [id, dispatch]);

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
      <button className="button button--red-border button--big reviews__sumbit-button">Оставить отзыв</button>
      {isAllCommentsShow ?
        <>
          {comments.map((comment) => <ProductCardCommentsItem review={comment} key={comment.id} />)}
        </> :
        <>
          {comments.slice(0, MIN_COMMENT_LENGTH).map((comment) => <ProductCardCommentsItem review={comment} key={comment.id} />)}
          {comments.length > MIN_COMMENT_LENGTH &&
            <button className="button button--medium reviews__more-button" onClick={handleShowMoreClick}>Показать еще отзывы</button>}
        </>}

      <a className="button button--up button--red-border button--big reviews__up-button" href="#top">Наверх</a>
    </section>
  );
}

export default ProductCardCommentsList;
