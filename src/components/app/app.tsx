import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { fetchGuitarsAction } from '../../store/api-actions';
import { getOrderType, getSortType, getUserPriceMax, getUserPriceMin } from '../../store/selectors';
import Cart from '../cart/cart';
import MainPage from '../main-page/main-page';
import Page404 from '../page-404/page-404';
import PropertyProductCard from '../property-product-card/property-product-card';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const orderType = useSelector(getOrderType);
  const userPriceMin = useSelector(getUserPriceMin);
  const userPriceMax = useSelector(getUserPriceMax);

  dispatch(fetchGuitarsAction(sortType, orderType, userPriceMin, userPriceMax));

  return (
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
  );
}

export default App;
