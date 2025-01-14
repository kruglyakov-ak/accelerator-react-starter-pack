import { setGuitarsCount } from '../action';
import { pagePagination } from './page-pagination';

describe('Reducer: pagePagination', () => {
  it('without additional parameters should return initial state', () => {
    expect(pagePagination(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        guitarsCount: 0,
      });
  });

  it('should update guitarsCount by load guitars', () => {
    const state = {
      guitarsCount: 0,
    };
    expect(pagePagination(state, setGuitarsCount(1)))
      .toEqual({
        guitarsCount: 1,
      });
  });
});
