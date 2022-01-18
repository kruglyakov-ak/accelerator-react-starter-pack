import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MIN_COMMENT_LENGTH } from '../../const';
import { getCommentsByGuitarId } from '../../store/comment-data/selectors';
import ProductCardCommentsItem from '../product-card-comments-item/product-card-comments-item';

function ProductCardCommentsList(): JSX.Element {
  const comments = useSelector(getCommentsByGuitarId);
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
