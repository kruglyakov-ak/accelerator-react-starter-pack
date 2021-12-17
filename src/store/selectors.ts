import { Guitar } from '../types/guitar';
import { State } from '../types/state';

const getGuitars = (state: State): Guitar[] => state.guitars;

export {
  getGuitars
};
