import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../const';
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


export {
  loadGuitars,
  loadGuitarById,
  changeSortType
};
