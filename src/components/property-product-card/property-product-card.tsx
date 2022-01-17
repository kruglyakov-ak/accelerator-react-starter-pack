import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppRoute, RatingCountNumber } from '../../const';
import { fetchCommentsByIdAction, fetchGuitarByIdAction } from '../../store/api-actions';
import { getComments } from '../../store/comment-data/selectors';
import { getGuitarById, getIsProductCardLoaded } from '../../store/guitar-data/selectors';
import { changeGuitarTypeToReadable } from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';
import Page404 from '../page-404/page-404';
import ProductCardCommentsList from '../product-card-comments-item/product-card-comments-list';

type RouteParams = {
  id: string
}

function PropertyProductCard(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();
  const guitar = useSelector(getGuitarById);
  const comments = useSelector(getComments);
  const isProductCardLoaded = useSelector(getIsProductCardLoaded);
  const [isSpecificationsTabOpen, setIsSpecificationsTabOpen] = useState(true);
  const [isModalReviewFormOpen] = useState(false);

  const handleSpecificationsTabsClick = () => {
    setIsSpecificationsTabOpen(true);
  };

  const handleDescriptionTabsClick = () => {
    setIsSpecificationsTabOpen(false);
  };

  useEffect(() => {
    dispatch(fetchGuitarByIdAction(+id));
    dispatch(fetchCommentsByIdAction(+id));
  }, [id, dispatch]);

  if (!guitar || !isProductCardLoaded) {
    return (isProductCardLoaded ? <Page404 /> :
      <div className="wrapper">
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Товар</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item"><Link to={AppRoute.Main} className="link">Главная</Link>
              </li>
              <li className="breadcrumbs__item"><Link to={AppRoute.Main} className="link">Каталог</Link>
              </li>
              <li className="breadcrumbs__item"><Link to={AppRoute.Product} className="link">Товар</Link>
              </li>
            </ul>
            <LoadingScreen />
          </div>
        </main>
      </div>);
  }

  const {
    name,
    previewImg,
    price,
    rating,
    stringCount,
    type,
    vendorCode,
    description,
  } = guitar;

  return (
    <div className="wrapper">
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">{name}</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><Link to={AppRoute.Main} className="link">Главная</Link>
            </li>
            <li className="breadcrumbs__item"><Link to={AppRoute.Main} className="link">Каталог</Link>
            </li>
            <li className="breadcrumbs__item"><Link to={AppRoute.Product} className="link">{name}</Link>
            </li>
          </ul>
          <div className="product-container"><img className="product-container__img" src={`/${previewImg}`} width="90" height="235" alt="" />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
              <div className="rate product-container__rating" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
                <svg width="14" height="14" aria-hidden="true">
                  {rating > RatingCountNumber.Zero ?
                    <use xlinkHref="#icon-full-star"></use> :
                    <use xlinkHref="#icon-star"></use>}
                </svg>
                <svg width="14" height="14" aria-hidden="true">
                  {rating > RatingCountNumber.One ?
                    <use xlinkHref="#icon-full-star"></use> :
                    <use xlinkHref="#icon-star"></use>}
                </svg>
                <svg width="14" height="14" aria-hidden="true">
                  {rating > RatingCountNumber.Two ?
                    <use xlinkHref="#icon-full-star"></use> :
                    <use xlinkHref="#icon-star"></use>}
                </svg>
                <svg width="14" height="14" aria-hidden="true">
                  {rating > RatingCountNumber.Three ?
                    <use xlinkHref="#icon-full-star"></use> :
                    <use xlinkHref="#icon-star"></use>}
                </svg>
                <svg width="14" height="14" aria-hidden="true">
                  {rating > RatingCountNumber.Four ?
                    <use xlinkHref="#icon-full-star"></use> :
                    <use xlinkHref="#icon-star"></use>}
                </svg>
                <span className="rate__count">{comments.length}</span><span className="rate__message"></span>
              </div>
              <div className="tabs">
                <button className={isSpecificationsTabOpen ? 'button button--medium tabs__button' : 'button button--black-border button--medium tabs__button'} onClick={handleSpecificationsTabsClick}>Характеристики</button>
                <button className={isSpecificationsTabOpen ? 'button button--black-border button--medium tabs__button' : 'button button--medium tabs__button'} onClick={handleDescriptionTabsClick}>Описание</button>
                <div className="tabs__content" id="characteristics">
                  <table className={isSpecificationsTabOpen ? 'tabs__table' : 'tabs__table hidden'}>
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Артикул:</td>
                      <td className="tabs__value">{vendorCode}</td>
                    </tr>
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Тип:</td>
                      <td className="tabs__value">{changeGuitarTypeToReadable(type)}</td>
                    </tr>
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Количество струн:</td>
                      <td className="tabs__value">{stringCount} струнная</td>
                    </tr>
                  </table>
                  <p className={isSpecificationsTabOpen ? 'tabs__product-description hidden' : 'tabs__product-description'}>
                    {description}
                  </p>
                </div>
              </div>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
              <button className="button button--red button--big product-container__button">Добавить в корзину</button>
            </div>
          </div>
          <ProductCardCommentsList />
        </div>
      </main>

      {isModalReviewFormOpen &&
        <div className="modal is-active modal--review modal-for-ui-kit">
          <div className="modal__wrapper">
            <div className="modal__overlay" data-close-modal=""></div>
            <div className="modal__content">
              <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
              <h3 className="modal__product-name title title--medium-20 title--uppercase">{name}</h3>
              <form className="form-review">
                <div className="form-review__wrapper">
                  <div className="form-review__name-wrapper">
                    <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                    <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" /><span className="form-review__warning">Заполните поле</span>
                  </div>
                  <div>
                    <span className="form-review__label form-review__label--required">Ваша Оценка</span>
                    <div className="rate rate--reverse">
                      <input className="visually-hidden" type="radio" id="star-5" name="rate" value="5" />
                      <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                      <input className="visually-hidden" type="radio" id="star-4" name="rate" value="4" />
                      <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                      <input className="visually-hidden" type="radio" id="star-3" name="rate" value="3" />
                      <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                      <input className="visually-hidden" type="radio" id="star-2" name="rate" value="2" />
                      <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                      <input className="visually-hidden" type="radio" id="star-1" name="rate" value="1" />
                      <label className="rate__label" htmlFor="star-1" title="Ужасно"></label><span className="rate__count"></span><span className="rate__message">Поставьте оценку</span>
                    </div>
                  </div>
                </div>
                <label className="form-review__label" htmlFor="user-name">Достоинства</label>
                <input className="form-review__input" id="pros" type="text" autoComplete="off" />
                <label className="form-review__label" htmlFor="user-name">Недостатки</label>
                <input className="form-review__input" id="user-name" type="text" autoComplete="off" />
                <label className="form-review__label" htmlFor="user-name">Комментарий</label>
                <textarea className="form-review__input form-review__input--textarea" id="user-name" rows={10} autoComplete="off"></textarea>
                <button className="button button--medium-20 form-review__button" type="submit">Отправить отзыв</button>
              </form>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </div>
        </div>}
    </div>
  );
}

export default PropertyProductCard;
