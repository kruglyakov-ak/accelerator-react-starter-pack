import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import CatalogSort from '../catalog-sort/catalog-sort';
import ProductCardsList from '../product-cards-list/product-cards-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import PaginationList from '../pagination-list/pagination-list';
import { getGuitarsOnPage } from '../../store/guitar-data/selectors';
import { useDispatch, useSelector } from 'react-redux';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import { useEffect } from 'react';
import { fetchGuitarsAction, fetchGuitarsOnPageAction, fetchGuitarWithoutFilters } from '../../store/api-actions';
import { getUserPriceMin, getUserPriceMax, getIsAcousticCheck, getIsElectricCheck, getIsUkuleleCheck, getIsFourStringsCheck, getIsSixStringsCheck, getIsSevenStringsCheck, getIsTwelveStringsCheck } from '../../store/catalog-filter/selectors';
import { getSortType, getOrderType } from '../../store/catalog-sort/selectors';
import { getCurrentPageNumber } from '../../store/page-pagination/selectors';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const orderType = useSelector(getOrderType);
  const userPriceMin = useSelector(getUserPriceMin);
  const userPriceMax = useSelector(getUserPriceMax);
  const isAcousticCheck = useSelector(getIsAcousticCheck);
  const isElectricCheck = useSelector(getIsElectricCheck);
  const isUkuleleCheck = useSelector(getIsUkuleleCheck);
  const isFourStringsCheck = useSelector(getIsFourStringsCheck);
  const isSixStringsCheck = useSelector(getIsSixStringsCheck);
  const isSevenStringsCheck = useSelector(getIsSevenStringsCheck);
  const isTwelveStringsCheck = useSelector(getIsTwelveStringsCheck);
  const currentPageNumber = useSelector(getCurrentPageNumber);

  useEffect(() => {
    if (
      !isAcousticCheck &&
      !isElectricCheck &&
      !isUkuleleCheck &&
      !isFourStringsCheck &&
      !isSixStringsCheck &&
      !isSevenStringsCheck &&
      !isTwelveStringsCheck) {
      dispatch(fetchGuitarWithoutFilters());
    }
    dispatch(fetchGuitarsOnPageAction( {
      sortType: sortType,
      orderType: orderType,
      userPriceMin: userPriceMin,
      userPriceMax: userPriceMax,
      isAcousticCheck: isAcousticCheck,
      isElectricCheck: isElectricCheck,
      isUkuleleCheck: isUkuleleCheck,
      isFourStringsCheck: isFourStringsCheck,
      isSixStringsCheck: isSixStringsCheck,
      isSevenStringsCheck: isSevenStringsCheck,
      isTwelveStringsCheck: isTwelveStringsCheck,
    }, currentPageNumber));

    dispatch(fetchGuitarsAction(
      {
        sortType: sortType,
        orderType: orderType,
        userPriceMin: userPriceMin,
        userPriceMax: userPriceMax,
        isAcousticCheck: isAcousticCheck,
        isElectricCheck: isElectricCheck,
        isUkuleleCheck: isUkuleleCheck,
        isFourStringsCheck: isFourStringsCheck,
        isSixStringsCheck: isSixStringsCheck,
        isSevenStringsCheck: isSevenStringsCheck,
        isTwelveStringsCheck: isTwelveStringsCheck,
      }));
  }, [currentPageNumber, dispatch, isAcousticCheck, isElectricCheck, isFourStringsCheck, isSevenStringsCheck, isSixStringsCheck, isTwelveStringsCheck, isUkuleleCheck, orderType, sortType, userPriceMax, userPriceMin]);


  const guitars = useSelector(getGuitarsOnPage);

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
            <ProductCardsList guitars={guitars} />
            <PaginationList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
