import { useHistory } from 'react-router-dom';
import { QueryParam, AppRoute } from '../../const';
import { useQueryParams } from '../../hooks/use-query-params';

type PaginationItemProps = {
  pageCount: number,
  activePage: number,
}

function PaginationItem({ pageCount, activePage }: PaginationItemProps): JSX.Element {
  const history = useHistory();
  const queryParams = useQueryParams();

  const handlePageLinkClick = () => {
    queryParams.set(QueryParam.CurrentPageNumber, String(pageCount - 1));
    history.push(`${AppRoute.Query}${queryParams.toString()}`);
  };

  return (
    <li className={pageCount === activePage ? 'pagination__page pagination__page--active' : 'pagination__page'}>
      <a className="link pagination__page-link" href="#top" onClick={handlePageLinkClick}>
        {pageCount}
      </a>
    </li>
  );
}

export default PaginationItem;
