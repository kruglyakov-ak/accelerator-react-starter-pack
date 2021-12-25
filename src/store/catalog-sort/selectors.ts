import { OrderType, SortType } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getSortType = (state: State): SortType => state[NameSpace.Sort].sortType;
const getOrderType = (state: State): OrderType => state[NameSpace.Sort].orderType;

export {
  getSortType,
  getOrderType
};
