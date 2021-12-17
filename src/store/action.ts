import { createAction } from '@reduxjs/toolkit';
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

export {
  loadGuitars
};
