import { OrderType, SortType } from '../../const';
import { setOrderType, setSortType } from '../action';
import { catalogSort } from './catalog-sort';

describe('Reducer: guitarData', () => {
  it('without additional parameters should return initial state', () => {
    expect(catalogSort(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        sortType: SortType.Default,
        orderType: OrderType.Default,
      });
  });

  it('should update sortType by change sort type', () => {
    const state = {
      sortType: SortType.Default,
      orderType: OrderType.Default,
    };
    expect(catalogSort(state, setSortType(SortType.Price)))
      .toEqual({
        sortType: SortType.Price,
        orderType: OrderType.Default,
      });
  });

  it('should update orderType by cahnge order type', () => {
    const state = {
      sortType: SortType.Default,
      orderType: OrderType.Default,
    };
    expect(catalogSort(state, setOrderType(OrderType.Asc)))
      .toEqual({
        sortType: SortType.Default,
        orderType: OrderType.Asc,
      });
  });
});
