import { Link } from 'react-router-dom';
import { AppRoute, QueryParam } from '../../const';
import CatalogSort from '../catalog-sort/catalog-sort';
import ProductCardsList from '../product-cards-list/product-cards-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import PaginationList from '../pagination-list/pagination-list';
import { getGuitarsOnPage } from '../../store/guitar-data/selectors';
import { useDispatch, useSelector } from 'react-redux';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import { useEffect } from 'react';
import { fetchGuitarsAction, fetchGuitarsOnPageAction, fetchGuitarWithoutFilters } from '../../store/api-actions';
import { getIsAcousticCheck, getIsElectricCheck, getIsUkuleleCheck, getIsFourStringsCheck, getIsSixStringsCheck, getIsSevenStringsCheck, getIsTwelveStringsCheck } from '../../store/catalog-filter/selectors';
import { getCurrentPageNumber } from '../../store/page-pagination/selectors';
import { useQueryParams } from '../../hooks/use-query-params';
import { FetchGuitarProperty } from '../../types/fetch-guitar-property';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const isAcousticCheck = useSelector(getIsAcousticCheck);
  const isElectricCheck = useSelector(getIsElectricCheck);
  const isUkuleleCheck = useSelector(getIsUkuleleCheck);
  const isFourStringsCheck = useSelector(getIsFourStringsCheck);
  const isSixStringsCheck = useSelector(getIsSixStringsCheck);
  const isSevenStringsCheck = useSelector(getIsSevenStringsCheck);
  const isTwelveStringsCheck = useSelector(getIsTwelveStringsCheck);
  const currentPageNumber = useSelector(getCurrentPageNumber);

  const queryParams = useQueryParams();
  const querySortType = queryParams.has(QueryParam.Sort) ? queryParams.get(QueryParam.Sort) : '';
  const queryOrderType = queryParams.has(QueryParam.Order) ? queryParams.get(QueryParam.Order) : '';
  const queryUserPriceMin = queryParams.has(QueryParam.PriceGte) ? queryParams.get(QueryParam.PriceGte) : '';
  const queryUserPriceMax = queryParams.has(QueryParam.PriceLte) ? queryParams.get(QueryParam.PriceLte) : '';

  useEffect(() => {
    const fetchParams: FetchGuitarProperty = {
      sortType: querySortType ? querySortType : '',
      orderType: queryOrderType ? queryOrderType : '',
      userPriceMin: queryUserPriceMin ? queryUserPriceMin : '',
      userPriceMax: queryUserPriceMax ? queryUserPriceMax : '',
      isAcousticCheck: isAcousticCheck,
      isElectricCheck: isElectricCheck,
      isUkuleleCheck: isUkuleleCheck,
      isFourStringsCheck: isFourStringsCheck,
      isSixStringsCheck: isSixStringsCheck,
      isSevenStringsCheck: isSevenStringsCheck,
      isTwelveStringsCheck: isTwelveStringsCheck,
      currentPageNumber: currentPageNumber,
    };

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
    dispatch(fetchGuitarsOnPageAction(fetchParams));

    dispatch(fetchGuitarsAction(fetchParams));
  }, [currentPageNumber, dispatch, isAcousticCheck, isElectricCheck, isFourStringsCheck, isSevenStringsCheck, isSixStringsCheck, isTwelveStringsCheck, isUkuleleCheck, queryOrderType, querySortType, queryUserPriceMax, queryUserPriceMin]);


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
