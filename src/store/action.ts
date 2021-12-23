import { createAction } from '@reduxjs/toolkit';
import { OrderType, SortType } from '../const';
import { ActionType } from '../types/action';
import { Guitar } from '../types/guitar';

const loadGuitars = createAction(
  ActionType.LoadGuitars,
  (guitars: Guitar[]) => ({
    payload: {
      guitars,
    },
  }),
);

const loadGuitarById = createAction(
  ActionType.LoadGuitarById,
  (guitar: Guitar) => ({
    payload: {
      guitar,
    },
  }),
);

const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: SortType) => ({
    payload: {
      sortType,
    },
  }),
);

const changeOrderType = createAction(
  ActionType.ChangeOrderType,
  (orderType: OrderType) => ({
    payload: {
      orderType,
    },
  }),
);

const changePriceRangeMin = createAction(
  ActionType.ChangePriceRangeMin,
  (priceRangeMin: number) => ({
    payload: {
      priceRangeMin,
    },
  }),
);

const changePriceRangeMax = createAction(
  ActionType.ChangePriceRangeMax,
  (priceRangeMax: number) => ({
    payload: {
      priceRangeMax,
    },
  }),
);


export {
  loadGuitars,
  loadGuitarById,
  changeSortType,
  changeOrderType,
  changePriceRangeMin,
  changePriceRangeMax
};
