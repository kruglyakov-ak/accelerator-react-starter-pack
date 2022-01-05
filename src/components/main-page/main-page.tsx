import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import CatalogSort from '../catalog-sort/catalog-sort';
import ProductCardsList from '../product-cards-list/product-cards-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import PaginationList from '../pagination-list/pagination-list';
import { getGuitars } from '../../store/guitar-data/selectors';
import { useSelector } from 'react-redux';
import MainPageEmpty from '../main-page-empty/main-page-empty';

function MainPage(): JSX.Element {
  const guitars = useSelector(getGuitars);

  if (guitars.length === 0) {
    return (<MainPageEmpty />);
  }

  return (
    <div className="wrapper">

      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger" id="top">Каталог гитар</h1>
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
            <PaginationList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
