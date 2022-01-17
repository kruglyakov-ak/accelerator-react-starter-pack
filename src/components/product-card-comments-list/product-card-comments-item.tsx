import { RatingCountNumber } from '../../const';
import { Comment } from '../../types/comment';

type ProductCardCommentsItemProps = {
  review: Comment
}

function ProductCardCommentsItem({ review }: ProductCardCommentsItemProps): JSX.Element {

  const {
    userName,
    advantages,
    disadvantages,
    comment,
    rating,
    createAt,
  } = review;

  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">{userName}</h4><span className="review__date">{createAt}</span>
      </div>
      <div className="rate review__rating-panel" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
        <svg width="16" height="16" aria-hidden="true">
          {rating > RatingCountNumber.Zero ?
            <use xlinkHref="#icon-full-star"></use> :
            <use xlinkHref="#icon-star"></use>}
        </svg>
        <svg width="16" height="16" aria-hidden="true">
          {rating > RatingCountNumber.One ?
            <use xlinkHref="#icon-full-star"></use> :
            <use xlinkHref="#icon-star"></use>}
        </svg>
        <svg width="16" height="16" aria-hidden="true">
          {rating > RatingCountNumber.Two ?
            <use xlinkHref="#icon-full-star"></use> :
            <use xlinkHref="#icon-star"></use>}
        </svg>
        <svg width="16" height="16" aria-hidden="true">
          {rating > RatingCountNumber.Three ?
            <use xlinkHref="#icon-full-star"></use> :
            <use xlinkHref="#icon-star"></use>}
        </svg>
        <svg width="16" height="16" aria-hidden="true">
          {rating > RatingCountNumber.Four ?
            <use xlinkHref="#icon-full-star"></use> :
            <use xlinkHref="#icon-star"></use>}
        </svg>
        <span className="rate__count"></span><span className="rate__message"></span>
      </div>
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{advantages}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{disadvantages}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment}</p>
    </div>
  );
}

export default ProductCardCommentsItem;
