import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Guitar } from '../../types/guitar';

type ProductCardItemProps = {
  guitar: Guitar,
}

function ProductCardItem({ guitar }: ProductCardItemProps): JSX.Element {
  const {
    name,
    previewImg,
    price,
    rating,
    id,
  } = guitar;

  return (
    <div className="product-card">
      <img src={previewImg} width="75" height="190" alt="СURT Z30 Plus Acoustics" />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          <svg width="12" height="11" aria-hidden="true">
            {rating > 0 ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            {rating > 1 ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            {rating > 2 ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            {rating > 3 ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            {rating > 4 ?
              <use xlinkHref="#icon-full-star"></use> :
              <use xlinkHref="#icon-star"></use>}
          </svg>
          <span className="rate__count">{rating}</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link to={`${AppRoute.Main}product/${id}`} className="button button--mini">Подробнее</Link>
        <button className="button button--red button--mini button--add-to-cart">Купить</button>
      </div>
    </div>
  );
}

export default ProductCardItem;
