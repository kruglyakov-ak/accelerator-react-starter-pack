import { APIRoute, SortType } from '../const';
import { ThunkActionResult } from '../types/action';
import { loadGuitarById, loadGuitars } from './action';
import { Guitar } from '../types/guitar';

const fetchGuitarsAction = (sortType: SortType = SortType.Default): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar[]>(sortType);
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
