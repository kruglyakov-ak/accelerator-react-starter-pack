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

const setPriceRangeMin = createAction(
  ActionType.SetPriceRangeMin,
  (priceRangeMin: number) => ({
    payload: {
      priceRangeMin,
    },
  }),
);

const setPriceRangeMax = createAction(
  ActionType.SetPriceRangeMax,
  (priceRangeMax: number) => ({
    payload: {
      priceRangeMax,
    },
  }),
);

const setUserPriceMin = createAction(
  ActionType.SetUserPriceMin,
  (userPriceMin: string) => ({
    payload: {
      userPriceMin,
    },
  }),
);

const setUserPriceMax = createAction(
  ActionType.SetUserPriceMax,
  (userPriceMax: string) => ({
    payload: {
      userPriceMax,
    },
  }),
);

const setIsAcousticCheck = createAction(
  ActionType.SetIsAcousticCheck,
  (isAcousticCheck: boolean) => ({
    payload: {
      isAcousticCheck,
    },
  }),
);
const setIsElectricCheck = createAction(
  ActionType.SetIsElectricCheck,
  (isElectricCheck: boolean) => ({
    payload: {
      isElectricCheck,
    },
  }),
);
const setIsUkuleleCheck = createAction(
  ActionType.SetIsUkuleleCheck,
  (isUkuleleCheck: boolean) => ({
    payload: {
      isUkuleleCheck,
    },
  }),
);


export {
  loadGuitars,
  loadGuitarById,
  changeSortType,
  changeOrderType,
  setPriceRangeMin,
  setPriceRangeMax,
  setUserPriceMin,
  setUserPriceMax,
  setIsAcousticCheck,
  setIsElectricCheck,
  setIsUkuleleCheck
};
