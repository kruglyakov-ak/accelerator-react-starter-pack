import { useDispatch, useSelector } from 'react-redux';
import { OrderType, SortType } from '../../const';
import { changeOrderType, changeSortType } from '../../store/action';
import { getOrderType, getSortType } from '../../store/selectors';

function CatalogSort(): JSX.Element {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const orderType = useSelector(getOrderType);

  const handleSortClick = ({ target }: any) => {
    dispatch(changeSortType(target.getAttribute('data-sort')));
  };

  const handleOrderClick = ({ target }: any) => {
    dispatch(changeOrderType(target.getAttribute('data-order')));
    if (sortType === SortType.Default) {
      dispatch(changeSortType(SortType.Price));
    }
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
          <button className="catalog-sort__order-button catalog-sort__order-button--up catalog-sort__order-button" aria-label="По возрастанию" tabIndex={-1} data-order={OrderType.Asc} onClick={handleOrderClick}></button>}
        {orderType === OrderType.Desc ?
          <button className="catalog-sort__order-button catalog-sort__order-button--down catalog-sort__order-button--down--active" aria-label="По убыванию" data-order={OrderType.Desc} onClick={handleOrderClick}></button> :
          <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию" data-order={OrderType.Desc} onClick={handleOrderClick}></button>}
      </div>
    </div>
  );
}

export default CatalogSort;
