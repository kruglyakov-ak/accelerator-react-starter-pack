import { APIRoute, FilterPath, OrderType, OrderTypePath, SortType, SortTypePath } from '../const';
import { ThunkActionResult } from '../types/action';
import { loadGuitarById, loadGuitars } from './action';
import { Guitar } from '../types/guitar';

const fetchGuitarsAction = (
  sortType: SortType,
  orderType: OrderType,
  priceRange: number[]): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar[]>(`${APIRoute.Guitars}?${SortTypePath[sortType]}${OrderTypePath[orderType]}${FilterPath.PriceGte}${priceRange[0]}${FilterPath.PriceLte}${priceRange[1]}`);
    dispatch(loadGuitars(data));
  };

const fetchGuitarByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar>(`${APIRoute.Guitars}/${id}`);
    dispatch(loadGuitarById(data));
  };

export {
  fetchGuitarsAction,
  fetchGuitarByIdAction
};
