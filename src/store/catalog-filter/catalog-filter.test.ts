import { DefaultPriceRange } from '../../const';
import { setPriceRangeMax, setPriceRangeMin, setUserPriceMax, setUserPriceMin } from '../action';
import { catalogFilter } from './catalog-filter';

describe('Reducer: catalogFilter', () => {
  it('without additional parameters should return initial state', () => {
    expect(catalogFilter(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
      });
  });

  it('should update priceRangeMin by change price range min', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
    };
    expect(catalogFilter(state, setPriceRangeMin(1000)))
      .toEqual({
        priceRangeMin: 1000,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
      });
  });

  it('should update priceRangeMax by change price range max', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
    };
    expect(catalogFilter(state, setPriceRangeMax(1000)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: 1000,
        userPriceMin: '',
        userPriceMax: '',
      });
  });

  it('should update userPriceMin by user change price range min', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
    };
    expect(catalogFilter(state, setUserPriceMin('1000')))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '1000',
        userPriceMax: '',
      });
  });


  it('should update userPriceMax by user change price range max', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
    };
    expect(catalogFilter(state, setUserPriceMax('1000')))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '1000',
      });
  });
});
