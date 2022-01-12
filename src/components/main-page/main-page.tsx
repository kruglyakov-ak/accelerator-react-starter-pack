import { Link } from 'react-router-dom';
import { AppRoute, QueryParam } from '../../const';
import CatalogSort from '../catalog-sort/catalog-sort';
import ProductCardsList from '../product-cards-list/product-cards-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import PaginationList from '../pagination-list/pagination-list';
import { getGuitarsOnPage, getIsDataLoaded } from '../../store/guitar-data/selectors';
import { useDispatch, useSelector } from 'react-redux';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import { useEffect } from 'react';
import { fetchGuitarsAction, fetchGuitarsOnPageAction, fetchGuitarWithoutFilters } from '../../store/api-actions';
import { useQueryParams } from '../../hooks/use-query-params';
import { FetchGuitarProperty } from '../../types/fetch-guitar-property';
import LoadingScreen from '../loading-screen/loading-screen';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(getIsDataLoaded);
  const queryParams = useQueryParams();

  const querySortType = queryParams.has(QueryParam.Sort) ? queryParams.get(QueryParam.Sort) : '';
  const queryOrderType = queryParams.has(QueryParam.Order) ? queryParams.get(QueryParam.Order) : '';
  const queryUserPriceMin = queryParams.has(QueryParam.PriceGte) ? queryParams.get(QueryParam.PriceGte) : '';
  const queryUserPriceMax = queryParams.has(QueryParam.PriceLte) ? queryParams.get(QueryParam.PriceLte) : '';
  const queryFourString = queryParams.has(QueryParam.FourString) ? Boolean(Number(queryParams.get(QueryParam.FourString))) : false;
  const querySixString = queryParams.has(QueryParam.SixString) ? Boolean(Number(queryParams.get(QueryParam.SixString))) : false;
  const querySevenString = queryParams.has(QueryParam.SevenString) ? Boolean(Number(queryParams.get(QueryParam.SevenString))) : false;
  const queryTwelveString = queryParams.has(QueryParam.TwelveString) ? Boolean(Number(queryParams.get(QueryParam.TwelveString))) : false;
  const queryAcusticType = queryParams.has(QueryParam.AcusticType) ? Boolean(Number(queryParams.get(QueryParam.AcusticType))) : false;
  const queryElectricType = queryParams.has(QueryParam.ElectricType) ? Boolean(Number(queryParams.get(QueryParam.ElectricType))) : false;
  const queryUkuleleType = queryParams.has(QueryParam.UkuleleType) ? Boolean(Number(queryParams.get(QueryParam.UkuleleType))) : false;
  const queryCurrentPage = queryParams.has(QueryParam.CurrentPageNumber) ? Number(queryParams.get(QueryParam.CurrentPageNumber)) : 0;

  useEffect(() => {
    const fetchParams: FetchGuitarProperty = {
      sortType: querySortType ? querySortType : '',
      orderType: queryOrderType ? queryOrderType : '',
      userPriceMin: queryUserPriceMin ? queryUserPriceMin : '',
      userPriceMax: queryUserPriceMax ? queryUserPriceMax : '',
      isAcousticCheck: queryAcusticType,
      isElectricCheck: queryElectricType,
      isUkuleleCheck: queryUkuleleType,
      isFourStringsCheck: queryFourString,
      isSixStringsCheck: querySixString,
      isSevenStringsCheck: querySevenString,
      isTwelveStringsCheck: queryTwelveString,
      currentPageNumber: queryCurrentPage,
    };

    if (
      !queryAcusticType &&
      !queryElectricType &&
      !queryUkuleleType &&
      !queryFourString &&
      !querySixString &&
      !querySevenString &&
      !queryTwelveString) {
      dispatch(fetchGuitarWithoutFilters());
    }
    dispatch(fetchGuitarsOnPageAction(fetchParams));

    dispatch(fetchGuitarsAction(fetchParams));
  }, [dispatch, queryAcusticType, queryCurrentPage, queryElectricType, queryFourString, queryOrderType, querySevenString, querySixString, querySortType, queryTwelveString, queryUkuleleType, queryUserPriceMax, queryUserPriceMin]);

  const guitars = useSelector(getGuitarsOnPage);

  if (!isDataLoaded) {
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
              <LoadingScreen />
            </div>
          </div>
        </main>
      </div>
    );
  }

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
