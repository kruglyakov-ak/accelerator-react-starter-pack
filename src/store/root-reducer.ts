import { combineReducers } from '@reduxjs/toolkit';
import { catalogFilter } from './catalog-filter/catalog-filter';
import { catalogSort } from './catalog-sort/catalog-sort';
import { guitarData } from './guitar-data/guitar-data';
import { pagePagination } from './page-pagination/page-pagination';

enum NameSpace {
  Data = 'DATA',
  Sort = 'SORT',
  Filter = 'FILTER',
  Pagination = 'PAGINATION'
}

const rootReducer = combineReducers({
  [NameSpace.Data]: guitarData,
  [NameSpace.Sort]: catalogSort,
  [NameSpace.Filter]: catalogFilter,
  [NameSpace.Pagination]: pagePagination,
});

type RootState = ReturnType<typeof rootReducer>;

export { NameSpace, rootReducer };
export type { RootState };
