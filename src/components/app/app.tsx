import { Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import Cart from '../cart/cart';
import MainPage from '../main-page/main-page';
import Page404 from '../page-404/page-404';
import PropertyProductCard from '../property-product-card/property-product-card';

function App(): JSX.Element {
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
