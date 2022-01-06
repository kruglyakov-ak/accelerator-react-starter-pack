import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { OrderType, SortType } from '../../const';
import { useQueryParams } from '../../hooks/use-query-params';
import { setOrderType, setSortType } from '../../store/action';
import { getOrderType, getSortType } from '../../store/catalog-sort/selectors';

function CatalogSort(): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const sortType = useSelector(getSortType);
  const orderType = useSelector(getOrderType);
  const querysParams = useQueryParams();

  const handleSortClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (currentTarget.dataset.sort) {
      case SortType.Price:
        dispatch(setSortType(currentTarget.dataset.sort));
        querysParams.set('_sort', SortType.Price);
        break;
      case SortType.Rating:
        dispatch(setSortType(currentTarget.dataset.sort));
        querysParams.set('_sort', SortType.Rating);
        break;
    }
    location.search = querysParams.toString();
    history.push(`/?${location.search}`);
  };

  const handleOrderClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (currentTarget.dataset.order) {
      case OrderType.Asc:
        dispatch(setOrderType(currentTarget.dataset.order));
        querysParams.set('order', OrderType.Asc);
        break;
      case OrderType.Desc:
        dispatch(setOrderType(currentTarget.dataset.order));
        querysParams.set('order', OrderType.Desc);
        break;
    }
    if (sortType === SortType.Default) {
      dispatch(setSortType(SortType.Price));
      querysParams.set('_sort', SortType.Price);
    }
    location.search = querysParams.toString();
    history.push(`/?${location.search}`);
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        {sortType === SortType.Price ?
          <button className="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по цене" tabIndex={-1} data-sort={SortType.Price} onClick={handleSortClick}>по цене</button> :
          <button className="catalog-sort__type-button catalog-sort__type-button" aria-label="по цене" tabIndex={-1} data-sort={SortType.Price} onClick={handleSortClick}>по цене</button>}
        {sortType === SortType.Rating ?
          <button className="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по популярности" data-sort={SortType.Rating} onClick={handleSortClick}>по популярности</button> :
          <button className="catalog-sort__type-button" aria-label="по популярности" data-sort={SortType.Rating} onClick={handleSortClick}>по популярности</button>}
      </div>
      <div className="catalog-sort__order">
        {orderType === OrderType.Asc ?
          <button className="catalog-sort__order-button catalog-sort__order-button--up catalog-sort__order-button--active" aria-label="По возрастанию" tabIndex={-1} data-order={OrderType.Asc} onClick={handleOrderClick}></button> :
          <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию" tabIndex={-1} data-order={OrderType.Asc} onClick={handleOrderClick}></button>}
        {orderType === OrderType.Desc ?
          <button className="catalog-sort__order-button catalog-sort__order-button--down catalog-sort__order-button--active" aria-label="По убыванию" data-order={OrderType.Desc} onClick={handleOrderClick}></button> :
          <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию" data-order={OrderType.Desc} onClick={handleOrderClick}></button>}
      </div>
    </div>
  );
}

export default CatalogSort;
