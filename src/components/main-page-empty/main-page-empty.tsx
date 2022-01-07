import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function MainPageEmpty(): JSX.Element {
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
          <h2 className="page-content__title title title--bigger">Нет данных о гитарах</h2>
        </div>
      </main>
    </div>
  );
}

export default MainPageEmpty;
