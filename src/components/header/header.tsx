import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getGuitarsWithoutFilters } from '../../store/guitar-data/selectors';

function Header(): JSX.Element {
  const guitars = useSelector(getGuitarsWithoutFilters);
  const path = useLocation().pathname;

  const [isSearchListHidden, setIsSearchListHidden] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchListHidden(false);
    setSearchValue(target.value);
    if (!target.value.length) {
      setIsSearchListHidden(true);
    }
  };

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Link to={AppRoute.Main} className="header__logo logo">
          <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link to={AppRoute.Main} className={path === AppRoute.Main ?
                'link main-nav__link link--current' :
                'link main-nav__link link'}
              >
                Каталог
              </Link>
            </li>
            <li><a className="link main-nav__link" href={AppRoute.Plug}>Где купить?</a>
            </li>
            <li><a className="link main-nav__link" href={AppRoute.Plug}>О компании</a>
            </li>
          </ul>
        </nav>
        <div className="form-search">
          <form className="form-search__form">
            <button className="form-search__submit" type="submit">
              <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
                <use xlinkHref="#icon-search"></use>
              </svg><span className="visually-hidden">Начать поиск</span>
            </button>
            <input
              className="form-search__input"
              id="search"
              type="text"
              autoComplete="off"
              placeholder="что вы ищите?"
              onChange={handleSearchChange}
            />
            <label className="visually-hidden" htmlFor="search">Поиск</label>
          </form>
          {isSearchListHidden ?
            <ul className="form-search__select-list hidden"></ul> :
            <ul className="form-search__select-list">
              {guitars
                .filter((guitar) => guitar.name.toLowerCase().includes(searchValue.toLowerCase()) &&
                guitar.name.toLowerCase()[0] === searchValue.toLowerCase()[0])
                .map((guitar) => (<li className="form-search__select-item" key={guitar.id}><Link to={`${AppRoute.Main}product/${guitar.id}`} className="link">{guitar.name}</Link></li>))}
            </ul>}
        </div>
        <Link to={AppRoute.Cart} className="header__cart-link" aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg><span className="visually-hidden">Перейти в корзину</span><span className="header__cart-count">2</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
