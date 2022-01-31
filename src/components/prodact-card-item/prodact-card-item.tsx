import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, RatingCountNumber } from '../../const';
import { setGuitarsInCart, setTotalPrices } from '../../store/action';
import { getGuitarsInCart } from '../../store/cart-data/selectors';
import { Comment } from '../../types/comment';
import { Guitar } from '../../types/guitar';

type ProductCardItemProps = {
  guitar: Guitar,
  comments: Comment[],
}

function ProductCardItem({ guitar, comments }: ProductCardItemProps): JSX.Element {
  const dispatch = useDispatch();
  const guitarsInCart = useSelector(getGuitarsInCart);

  const {
    name,
    previewImg,
    price,
    rating,
    id,
  } = guitar;

  const handleAddToCartClick = () => {
    if (!guitarsInCart.some((guitarInCart) => guitarInCart.id === guitar.id)) {
      dispatch(setGuitarsInCart(guitar));
      dispatch(setTotalPrices(guitar.price));
    }
  };

  return (
    <div className="product-card">
      <img src={previewImg} width="75" height="190" alt="СURT Z30 Plus Acoustics" />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          <svg width="12" height="11" aria-hidden="true">
            {rating > RatingCountNumber.Zero ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            {rating > RatingCountNumber.One ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            {rating > RatingCountNumber.Two ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            {rating > RatingCountNumber.Three ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            {rating > RatingCountNumber.Four ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <span className="rate__count">{comments.length}</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link to={`${AppRoute.Main}product/${id}`} className="button button--mini">Подробнее</Link>
        {guitarsInCart.some((guitarInCart) => guitarInCart.id === guitar.id) ?
          <Link to={AppRoute.Cart} className="button button--red-border button--mini button--in-cart">В Корзине</Link> :
          <button className="button button--red button--mini button--add-to-cart" onClick={handleAddToCartClick}>Купить</button>}
      </div>
    </div>
  );
}

export default ProductCardItem;
