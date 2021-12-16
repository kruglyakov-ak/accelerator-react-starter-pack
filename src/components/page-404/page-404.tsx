import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Footer from '../footer/footer';
import Header from '../header/header';

function Page404(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />

      <main className="page-content">
        <div className="container">
          <div className="product-container__info-wrapper">
            <p className="product-container__title title title--big title--uppercase">
              Ошибка 404. <br />
              Страница не найдена. <br />
            </p>
            <p className="product-container__title title title--big title--uppercase">
              <Link className="link" to={AppRoute.Main}>Кликните здесь чтобы вернуться на главную</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Page404;
