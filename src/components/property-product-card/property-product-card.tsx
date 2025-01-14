import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppRoute, RatingCountNumber } from '../../const';
import { fetchCommentsByGuitarIdAction, fetchGuitarByIdAction } from '../../store/api-actions';
import { getCommentsByGuitarId } from '../../store/comment-data/selectors';
import { getGuitarById, getIsProductCardLoaded } from '../../store/guitar-data/selectors';
import { changeGuitarTypeToReadable } from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';
import ModalAddToCart from '../modal-add-to-cart/modal-add-to-cart';
import ModalSuccessAddToCart from '../modal-success-add-to-cart/modal-success-add-to-cart';
import Page404 from '../page-404/page-404';
import ProductCardComments from '../product-card-comments/product-card-comments';

type RouteParams = {
  id: string
}

function PropertyProductCard(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();
  const guitar = useSelector(getGuitarById);
  const comments = useSelector(getCommentsByGuitarId);
  const isProductCardLoaded = useSelector(getIsProductCardLoaded);

  const [isSpecificationsTabOpen, setIsSpecificationsTabOpen] = useState(true);
  const [isModalAddToCardOpen, setIsModalAddToCardOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

  const handleEscapeKeyDown = useCallback((evt: { key: string; }) => {
    if (evt.key === 'Escape') {
      setIsModalAddToCardOpen(false);
      setIsModalSuccessOpen(false);
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
    }
  }, []);

  const handleModalAddToCardOpen = () => {
    setIsModalAddToCardOpen(true);
  };

  const onAddToCardModalClose = () => {
    setIsModalAddToCardOpen(false);
  };

  const onSuccessModalOpen = () => {
    setIsModalSuccessOpen(true);
  };

  const onSuccessModalClose = () => {
    setIsModalSuccessOpen(false);
  };

  const handleSpecificationsTabsClick = () => {
    setIsSpecificationsTabOpen(true);
  };

  const handleDescriptionTabsClick = () => {
    setIsSpecificationsTabOpen(false);
  };

  useEffect(() => {
    dispatch(fetchGuitarByIdAction(+id));
    dispatch(fetchCommentsByGuitarIdAction(+id));
  }, [id, dispatch]);

  useEffect(() => {
    isModalAddToCardOpen ?
      document.body.addEventListener('keydown', handleEscapeKeyDown) :
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
  }, [handleEscapeKeyDown, isModalAddToCardOpen]);

  useEffect(() => {
    isModalSuccessOpen ?
      document.body.addEventListener('keydown', handleEscapeKeyDown) :
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
  }, [handleEscapeKeyDown, isModalSuccessOpen]);

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
          <div className="product-container"><img className="product-container__img" src={`/${previewImg}`} width="90" height="235" alt={name} />
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
                    <tbody>
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
                    </tbody>
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
              <button className="button button--red button--big product-container__button" onClick={handleModalAddToCardOpen}>Добавить в корзину</button>
            </div>
          </div>
          <ProductCardComments name={name} guitarId={id} />
        </div>
      </main>
      {isModalAddToCardOpen && <ModalAddToCart guitar={guitar} onAddToCardModalClose={onAddToCardModalClose} onSuccessModalOpen={onSuccessModalOpen} />}
      {isModalSuccessOpen && <ModalSuccessAddToCart onSuccessModalClose={onSuccessModalClose} />}
    </div>
  );
}

export default PropertyProductCard;
