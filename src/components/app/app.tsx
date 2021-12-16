import { Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import Cart from '../cart/cart';
import MainPage from '../main-page/main-page';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path={AppRoute.Main} exact>
        <MainPage />
      </Route>
      <Route path={AppRoute.Cart} exact>
        <Cart />
      </Route>
    </Switch>
  );
}

export default App;
