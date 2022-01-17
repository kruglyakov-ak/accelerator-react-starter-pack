import { APIRoute, FilterPath, GUITARS_ON_PAGE, GuitarType, StringCountNumber } from '../const';
import { ThunkActionResult } from '../types/action';
import { loadGuitarById, loadGuitars, loadGuitarsWithoutFilters, setGuitarsCount, setPriceRangeMax, setPriceRangeMin, loadGuitarsOnPage, setIsDataLoaded, setIsProductCardLoaded, loadComments, setIsCommentsLoaded } from './action';
import { Guitar } from '../types/guitar';
import { FetchGuitarProperty } from '../types/fetch-guitar-property';
import { Comment } from '../types/comment';
import { PostComment } from '../types/post-comment';

const fetchGuitarsAction = (fetchProperty: FetchGuitarProperty): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {
      sortType,
      orderType,
      userPriceMin,
      userPriceMax,
      isAcousticCheck,
      isElectricCheck,
      isUkuleleCheck,
      isFourStringsCheck,
      isSixStringsCheck,
      isSevenStringsCheck,
      isTwelveStringsCheck,
    } = fetchProperty;

    let path = `${APIRoute.Guitars}?`;

    if (sortType) {
      path += `${FilterPath.Sort}${sortType}`;
    }
    if (orderType) {
      path += `${FilterPath.Order}${orderType}`;
    }
    if (userPriceMin) {
      path += `${FilterPath.PriceGte}${userPriceMin}`;
    }
    if (userPriceMax) {
      path += `${FilterPath.PriceLte}${userPriceMax}`;
    }
    if (isAcousticCheck) {
      path += `${FilterPath.Type}${GuitarType.Acoustic}`;
    }
    if (isElectricCheck) {
      path += `${FilterPath.Type}${GuitarType.Electric}`;
    }
    if (isUkuleleCheck) {
      path += `${FilterPath.Type}${GuitarType.Ukulele}`;
    }
    if (isFourStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber.FourStrings}`;
    }
    if (isSixStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber.SixStrings}`;
    }
    if (isSevenStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber.SevenStrings}`;
    }
    if (isTwelveStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber.TwelveStrings}`;
    }
    const { data } = await api.get<Guitar[]>(path);
    dispatch(loadGuitars(data));
    if (
      isAcousticCheck ||
      isElectricCheck ||
      isUkuleleCheck ||
      isFourStringsCheck ||
      isSixStringsCheck ||
      isSevenStringsCheck ||
      isTwelveStringsCheck) {
      dispatch(setPriceRangeMin(data.slice().sort((a, b) => a.price - b.price)[0].price));
      dispatch(setPriceRangeMax(data.slice().sort((a, b) => b.price - a.price)[0].price));
    }
  };

const fetchGuitarsOnPageAction = (fetchProperty: FetchGuitarProperty): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {
      sortType,
      orderType,
      userPriceMin,
      userPriceMax,
      isAcousticCheck,
      isElectricCheck,
      isUkuleleCheck,
      isFourStringsCheck,
      isSixStringsCheck,
      isSevenStringsCheck,
      isTwelveStringsCheck,
      currentPageNumber,
    } = fetchProperty;

    let path = `${APIRoute.Guitars}?${FilterPath.PaginationStart}${currentPageNumber * GUITARS_ON_PAGE}${FilterPath.PaginationEnd}${(currentPageNumber + 1) * GUITARS_ON_PAGE}`;

    if (sortType) {
      path += `${FilterPath.Sort}${sortType}`;
    }
    if (orderType) {
      path += `${FilterPath.Order}${orderType}`;
    }
    if (userPriceMin) {
      path += `${FilterPath.PriceGte}${userPriceMin}`;
    }
    if (userPriceMax) {
      path += `${FilterPath.PriceLte}${userPriceMax}`;
    }
    if (isAcousticCheck) {
      path += `${FilterPath.Type}${GuitarType.Acoustic}`;
    }
    if (isElectricCheck) {
      path += `${FilterPath.Type}${GuitarType.Electric}`;
    }
    if (isUkuleleCheck) {
      path += `${FilterPath.Type}${GuitarType.Ukulele}`;
    }
    if (isFourStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber.FourStrings}`;
    }
    if (isSixStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber.SixStrings}`;
    }
    if (isSevenStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber.SevenStrings}`;
    }
    if (isTwelveStringsCheck) {
      path += `${FilterPath.String}${StringCountNumber.TwelveStrings}`;
    }
    dispatch(setIsDataLoaded(false));
    try {
      const { data, headers } = await api.get<Guitar[]>(path);
      dispatch(loadGuitarsOnPage(data));
      dispatch(setGuitarsCount(+headers['x-total-count']));
      dispatch(setIsDataLoaded(true));
    } catch (error) {
      dispatch(setIsDataLoaded(true));
    }
  };

const fetchGuitarByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsProductCardLoaded(false));
    try {
      const { data } = await api.get<Guitar>(`${APIRoute.Guitars}/${id}`);
      dispatch(loadGuitarById(data));
      dispatch(setIsProductCardLoaded(true));
    } catch (error) {
      dispatch(setIsProductCardLoaded(true));
    }
  };

const fetchGuitarWithoutFilters = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Guitar[]>(APIRoute.Guitars);
    dispatch(loadGuitarsWithoutFilters(data));
    dispatch(setPriceRangeMin(data.slice().sort((a, b) => a.price - b.price)[0].price));
    dispatch(setPriceRangeMax(data.slice().sort((a, b) => b.price - a.price)[0].price));
  };

const fetchCommentsByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsCommentsLoaded(false));
    try {
      const { data } = await api.get<Comment[]>(`${APIRoute.Guitars}/${id}/comments`);
      dispatch(loadComments(data
        .sort((prev, next) => new Date(next.createAt).getTime() - new Date(prev.createAt).getTime())));
      dispatch(setIsCommentsLoaded(true));
    } catch (error) {
      dispatch(setIsCommentsLoaded(true));
    }
  };

const postComments = (id: string, postComment: PostComment, onSuccessPost: () => void): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post(APIRoute.Comments, postComment);
    onSuccessPost();
    dispatch(setIsCommentsLoaded(false));
    try {
      const { data } = await api.get<Comment[]>(`${APIRoute.Guitars}/${id}/comments`);
      dispatch(loadComments(data
        .sort((prev, next) => new Date(next.createAt).getTime() - new Date(prev.createAt).getTime())));
      dispatch(setIsCommentsLoaded(true));
    } catch (error) {
      dispatch(setIsCommentsLoaded(true));
    }
  };

export {
  fetchGuitarsAction,
  fetchGuitarByIdAction,
  fetchGuitarWithoutFilters,
  fetchGuitarsOnPageAction,
  fetchCommentsByIdAction,
  postComments
};
