import { DefaultPriceRange } from '../../const';
import { setIsAcousticCheck, setIsElectricCheck, setIsFourStringsCheck, setIsSevenStringsCheck, setIsSixStringsCheck, setIsTwelveStringsCheck, setIsUkuleleCheck, setPriceRangeMax, setPriceRangeMin, setUserPriceMax, setUserPriceMin } from '../action';
import { catalogFilter } from './catalog-filter';

describe('Reducer: catalogFilter', () => {
  it('without additional parameters should return initial state', () => {
    expect(catalogFilter(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update priceRangeMin by change price range min', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setPriceRangeMin(1000)))
      .toEqual({
        priceRangeMin: 1000,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update priceRangeMax by change price range max', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setPriceRangeMax(1000)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: 1000,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update userPriceMin by user change price range min', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setUserPriceMin('1000')))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '1000',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });


  it('should update userPriceMax by user change price range max', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setUserPriceMax('1000')))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '1000',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update isAcousticCheck by change filter Acoustic', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setIsAcousticCheck(true)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: true,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update isElectricCheck by change filter Electric', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setIsElectricCheck(true)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: true,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update isUkuleleCheck by change filter Ukulele', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setIsUkuleleCheck(true)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: true,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update isFourStringsCheck by change filter 4 string', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setIsFourStringsCheck(true)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: true,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update isSixStringsCheck by change filter 6 string', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setIsSixStringsCheck(true)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: true,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: false,
      });
  });

  it('should update isSevenStringsCheck by change filter 7 string', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setIsSevenStringsCheck(true)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: true,
        isTwelveStringsCheck: false,
      });
  });

  it('should update isTwelveStringsCheck by change filter 12 string', () => {
    const state = {
      priceRangeMin: DefaultPriceRange.Min,
      priceRangeMax: DefaultPriceRange.Max,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
    };
    expect(catalogFilter(state, setIsTwelveStringsCheck(true)))
      .toEqual({
        priceRangeMin: DefaultPriceRange.Min,
        priceRangeMax: DefaultPriceRange.Max,
        userPriceMin: '',
        userPriceMax: '',
        isAcousticCheck: false,
        isElectricCheck: false,
        isUkuleleCheck: false,
        isFourStringsCheck: false,
        isSixStringsCheck: false,
        isSevenStringsCheck: false,
        isTwelveStringsCheck: true,
      });
  });
});
