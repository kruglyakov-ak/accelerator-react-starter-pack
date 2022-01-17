import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MIN_COMMENT_LENGTH } from '../../const';
import { getComments, getIsCommentsLoaded } from '../../store/comment-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import ProductCardCommentsItem from '../product-card-comments-item/product-card-comments-item';

function ProductCardCommentsList(): JSX.Element {
  const comments = useSelector(getComments);
  const isCommentsLoaded = useSelector(getIsCommentsLoaded);
  const [isAllCommentsShow, setIsAllCommentsShow] = useState(false);

  const handleShowMoreClick = () => {
    setIsAllCommentsShow(true);
  };

  if (!isCommentsLoaded) {
    return (
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <LoadingScreen />
      </section>
    );
  }

  return (
    <>
      {isAllCommentsShow ?
        <>
          {comments.map((comment) => <ProductCardCommentsItem review={comment} key={comment.id} />)}
        </> :
        <>
          {comments.slice(0, MIN_COMMENT_LENGTH).map((comment) => <ProductCardCommentsItem review={comment} key={comment.id} />)}
          {comments.length > MIN_COMMENT_LENGTH &&
            <button className="button button--medium reviews__more-button" onClick={handleShowMoreClick}>Показать еще отзывы</button>}
        </>}
      {comments.length !== 0 &&
        <a className="button button--up button--red-border button--big reviews__up-button" href="#top">Наверх</a>}
    </>
  );
}

export default ProductCardCommentsList;
