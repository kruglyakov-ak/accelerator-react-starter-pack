import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GUITARS_ON_PAGE } from '../../const';
import { setCurrentPageNumber } from '../../store/action';
import { getCurrentPageNumber, getGuitarsCount } from '../../store/page-pagination/selectors';
import PaginationItem from '../pagination-item/pagination-item';

function PaginationList(): JSX.Element {
  const dispatch = useDispatch();
  const guitarsCount = useSelector(getGuitarsCount);
  const paginationPageLinkCount = Math.ceil(guitarsCount / GUITARS_ON_PAGE);
  const currentPageNumber = useSelector(getCurrentPageNumber);

  const handlePrevLinkClick = () => {
    dispatch(setCurrentPageNumber(currentPageNumber - 1));
  };

  const handleNextLinkClick = () => {
    dispatch(setCurrentPageNumber(currentPageNumber + 1));
  };


  if (guitarsCount <= GUITARS_ON_PAGE) {
    return (<div className="pagination page-content__pagination"></div>);
  }

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        {currentPageNumber !== 0 &&
          <li className="pagination__page pagination__page--prev" id="prev">
            <a className="link pagination__page-link" href="#top" onClick={handlePrevLinkClick}>Назад</a>
          </li>}
        {new Array(paginationPageLinkCount)
          .fill('')
          .map((item, i) => <PaginationItem pageCount={i + 1} key={i++} activePage={currentPageNumber + 1} />)}
        {currentPageNumber !== paginationPageLinkCount - 1 &&
          <li className="pagination__page pagination__page--next" id="next">
            <a className="link pagination__page-link" href="#top" onClick={handleNextLinkClick}>Далее</a>
          </li>}
      </ul>
    </div>
  );
}

export default PaginationList;
