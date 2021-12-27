import { useDispatch } from 'react-redux';
import { AppRoute } from '../../const';
import { setCurrentPageNumber } from '../../store/action';

type PaginationItemProps = {
  pageCount: number,
  activePage: number,
}

function PaginationItem({ pageCount, activePage }: PaginationItemProps): JSX.Element {
  const dispatch = useDispatch();

  const handlePageLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setCurrentPageNumber(pageCount - 1));
  };

  return (
    <li className={pageCount === activePage ? 'pagination__page pagination__page--active' : 'pagination__page'}>
      <a className="link pagination__page-link" href={AppRoute.Plug} onClick={handlePageLinkClick}>
        {pageCount}
      </a>
    </li>
  );
}

export default PaginationItem;
