import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MIN_COMMENT_LENGTH } from '../../const';
import { getCommentsByGuitarId, getIsCommentsLoaded } from '../../store/comment-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import ProductCardCommentsItem from '../product-card-comments-item/product-card-comments-item';

function ProductCardCommentsList(): JSX.Element {
  const comments = useSelector(getCommentsByGuitarId);
  const isCommentsLoaded = useSelector(getIsCommentsLoaded);
  const [isAllCommentsShow, setIsAllCommentsShow] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleShowMoreClick = () => {
    setIsAllCommentsShow(true);
    document.documentElement.scrollTo();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (scroll > document.documentElement.scrollHeight - document.documentElement.clientHeight - 275) {
      setIsAllCommentsShow(true);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAllCommentsShow, scroll]);


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
