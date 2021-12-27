import { makeFakeGuitars } from '../../utils/mocks';
import { loadGuitarById, loadGuitars, loadGuitarsWithoutFilters } from '../action';
import { guitarData } from './guitar-data';

const guitars = makeFakeGuitars();

describe('Reducer: guitarData', () => {
  it('without additional parameters should return initial state', () => {
    expect(guitarData(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        guitars: [],
        guitarsWithoutFilters: [],
        guitar: null,
      });
  });

  it('should update guitars by load guitars', () => {
    const state = {
      guitars: [],
      guitarsWithoutFilters: [],
      guitar: null,
    };
    expect(guitarData(state, loadGuitars(guitars)))
      .toEqual({
        guitars: guitars,
        guitarsWithoutFilters: [],
        guitar: null,
      });
  });

  it('should update guitarsWithoutFilters by load guitars without filters', () => {
    const state = {
      guitars: [],
      guitarsWithoutFilters: [],
      guitar: null,
    };
    expect(guitarData(state, loadGuitarsWithoutFilters(guitars)))
      .toEqual({
        guitars: [],
        guitarsWithoutFilters: guitars,
        guitar: null,
      });
  });

  it('should update guitar by load guitar', () => {
    const state = {
      guitars: [],
      guitarsWithoutFilters: [],
      guitar: null,
    };
    expect(guitarData(state, loadGuitarById(guitars[0])))
      .toEqual({
        guitars: [],
        guitarsWithoutFilters: [],
        guitar: guitars[0],
      });
  });
});
