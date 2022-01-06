import { createAPI } from '../services/api';
import { makeFakeGuitars } from '../utils/mocks';
import { State } from '../types/state';
import { APIRoute, OrderType, SortType } from '../const';
import { fetchGuitarByIdAction, fetchGuitarsAction, fetchGuitarWithoutFilters } from './api-actions';
import { loadGuitarById, loadGuitars, loadGuitarsWithoutFilters, setGuitarsCount, setPriceRangeMax, setPriceRangeMin } from './action';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';

const guitars = makeFakeGuitars();

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const headers = {
    'x-total-count': guitars.length,
  };
  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should dispatch loadGuitarsWithoutFilters when GET /gutars', async () => {
    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(200, guitars);

    const store = mockStore();
    await store.dispatch(fetchGuitarWithoutFilters());

    expect(store.getActions()).toEqual([
      loadGuitarsWithoutFilters(guitars),
      setPriceRangeMin(guitars.slice().sort((a, b) => a.price - b.price)[0].price),
      setPriceRangeMax(guitars.slice().sort((a, b) => b.price - a.price)[0].price),
    ]);
  });

  it('should dispatch loadGuitars when GET /gutars', async () => {
    mockAPI
      .onGet('guitars?&_start=0&_end=9')
      .reply(200, guitars, headers);

    const store = mockStore();
    await store.dispatch(fetchGuitarsAction({
      sortType: SortType.Default,
      orderType: OrderType.Default,
      userPriceMin: '',
      userPriceMax: '',
      isAcousticCheck: false,
      isElectricCheck: false,
      isUkuleleCheck: false,
      isFourStringsCheck: false,
      isSixStringsCheck: false,
      isSevenStringsCheck: false,
      isTwelveStringsCheck: false,
      currentPageNumber: 0,
    }));

    expect(store.getActions()).toEqual([
      loadGuitars(guitars),
      setGuitarsCount(guitars.length),
    ]);
  });

  it('should dispatch loadGuitarById when GET /gutars/:id', async () => {
    mockAPI
      .onGet(`${APIRoute.Guitars}/${guitars[0].id}`)
      .reply(200, guitars[0]);

    const store = mockStore();
    await store.dispatch(fetchGuitarByIdAction(guitars[0].id));

    expect(store.getActions()).toEqual([
      loadGuitarById(guitars[0]),
    ]);
  });
});
