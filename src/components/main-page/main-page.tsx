import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { fetchGuitarsAction } from '../../store/api-actions';
import { getOrderType, getPriceRangeMax, getPriceRangeMin, getSortType } from '../../store/selectors';
import Footer from '../footer/footer';
import Header from '../header/header';
import CatalogSort from '../catalog-sort/catalog-sort';
import ProductCardsList from '../product-cards-list/product-cards-llist';
import CatalogFilter from '../catalog-filter/catalog-filter';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const orderType = useSelector(getOrderType);
  const priceRangeMin = useSelector(getPriceRangeMin);
  const priceRangeMax = useSelector(getPriceRangeMax);

  dispatch(fetchGuitarsAction(sortType, orderType, [priceRangeMin, priceRangeMax]));

  return (
    <div className="wrapper">
      <Header />

      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <Link to={AppRoute.Main} className="link">Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to={AppRoute.Main} className="link">Каталог</Link>
            </li>
          </ul>
          <div className="catalog">
            <CatalogFilter />
            <CatalogSort />
            <ProductCardsList />

            <div className="pagination page-content__pagination">
              <ul className="pagination__list">
                <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
                </li>
                <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainPage;
