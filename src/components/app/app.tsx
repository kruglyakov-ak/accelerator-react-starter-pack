import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { fetchGuitarsAction, fetchGuitarWithoutFilters } from '../../store/api-actions';
import {
  getIsAcousticCheck,
  getIsElectricCheck,
  getIsFourStringsCheck,
  getIsSevenStringsCheck,
  getIsSixStringsCheck,
  getIsTwelveStringsCheck,
  getIsUkuleleCheck,
  getUserPriceMax,
  getUserPriceMin
} from '../../store/catalog-filter/selectors';
import { getOrderType, getSortType } from '../../store/catalog-sort/selectors';
import { getCurrentPageNumber } from '../../store/page-pagination/selectors';
import Cart from '../cart/cart';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainPage from '../main-page/main-page';
import Page404 from '../page-404/page-404';
import PropertyProductCard from '../property-product-card/property-product-card';

function App(): JSX.Element {
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
      currentPageNumber: currentPageNumber,
    }));

  if (
    !isAcousticCheck &&
    !isElectricCheck &&
    !isUkuleleCheck &&
    !isFourStringsCheck &&
    !isSixStringsCheck &&
    !isSevenStringsCheck &&
    !isTwelveStringsCheck
  ) {
    dispatch(fetchGuitarWithoutFilters());
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainPage />
        </Route>
        <Route path={AppRoute.Cart} exact>
          <Cart />
        </Route>
        <Route path={AppRoute.Product} exact>
          <PropertyProductCard />
        </Route>
        <Route
          render={() => (
            <Page404 />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
