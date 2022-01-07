import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoute, OrderType, QueryParam, SortType } from '../../const';
import { useQueryParams } from '../../hooks/use-query-params';

function CatalogSort(): JSX.Element {
  const history = useHistory();
  const querysParams = useQueryParams();

  const handleSortClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (currentTarget.dataset.sort) {
      case SortType.Price:
        querysParams.set(QueryParam.Sort, SortType.Price);
        break;
      case SortType.Rating:
        querysParams.set(QueryParam.Sort, SortType.Rating);
        break;
    }
    history.push(`${AppRoute.Query}${querysParams.toString()}`);
  };

  const handleOrderClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (currentTarget.dataset.order) {
      case OrderType.Asc:
        querysParams.set(QueryParam.Order, OrderType.Asc);
        break;
      case OrderType.Desc:
        querysParams.set(QueryParam.Order, OrderType.Desc);
        break;
    }
    if (!querysParams.has(QueryParam.Sort)) {
      querysParams.set(QueryParam.Sort, SortType.Price);
    }
    history.push(`${AppRoute.Query}${querysParams.toString()}`);
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        {querysParams.get(QueryParam.Sort) === SortType.Price ?
          <button className="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по цене" tabIndex={-1} data-sort={SortType.Price} onClick={handleSortClick}>по цене</button> :
          <button className="catalog-sort__type-button catalog-sort__type-button" aria-label="по цене" tabIndex={-1} data-sort={SortType.Price} onClick={handleSortClick}>по цене</button>}
        {querysParams.get(QueryParam.Sort) === SortType.Rating ?
          <button className="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по популярности" data-sort={SortType.Rating} onClick={handleSortClick}>по популярности</button> :
          <button className="catalog-sort__type-button" aria-label="по популярности" data-sort={SortType.Rating} onClick={handleSortClick}>по популярности</button>}
      </div>
      <div className="catalog-sort__order">
        {querysParams.get(QueryParam.Order) === OrderType.Asc ?
          <button className="catalog-sort__order-button catalog-sort__order-button--up catalog-sort__order-button--active" aria-label="По возрастанию" tabIndex={-1} data-order={OrderType.Asc} onClick={handleOrderClick}></button> :
          <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию" tabIndex={-1} data-order={OrderType.Asc} onClick={handleOrderClick}></button>}
        {querysParams.get(QueryParam.Order) === OrderType.Desc ?
          <button className="catalog-sort__order-button catalog-sort__order-button--down catalog-sort__order-button--active" aria-label="По убыванию" data-order={OrderType.Desc} onClick={handleOrderClick}></button> :
          <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию" data-order={OrderType.Desc} onClick={handleOrderClick}></button>}
      </div>
    </div>
  );
}

export default CatalogSort;
