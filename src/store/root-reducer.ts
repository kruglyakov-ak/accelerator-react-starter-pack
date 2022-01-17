import { combineReducers } from '@reduxjs/toolkit';
import { catalogFilter } from './catalog-filter/catalog-filter';
import { commentData } from './comment-data/comment-data';
import { guitarData } from './guitar-data/guitar-data';
import { pagePagination } from './page-pagination/page-pagination';

enum NameSpace {
  Data = 'DATA',
  Filter = 'FILTER',
  Pagination = 'PAGINATION',
  Comment = 'COMMENT'
}

const rootReducer = combineReducers({
  [NameSpace.Data]: guitarData,
  [NameSpace.Filter]: catalogFilter,
  [NameSpace.Pagination]: pagePagination,
  [NameSpace.Comment]: commentData,
});

type RootState = ReturnType<typeof rootReducer>;

export { NameSpace, rootReducer };
export type { RootState };
