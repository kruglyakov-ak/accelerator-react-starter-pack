import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppRoute, QueryParam, StringCount } from '../../const';
import { useQueryParams } from '../../hooks/use-query-params';
import {
  setCurrentPageNumber,
  setIsAcousticCheck,
  setIsElectricCheck,
  setIsFourStringsCheck,
  setIsSevenStringsCheck,
  setIsSixStringsCheck,
  setIsTwelveStringsCheck,
  setIsUkuleleCheck
} from '../../store/action';
import {
  getIsAcousticCheck,
  getIsElectricCheck,
  getIsUkuleleCheck
} from '../../store/catalog-filter/selectors';

function CatalogFilterStringCount(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const queryParams = useQueryParams();
  const isAcousticCheck = useSelector(getIsAcousticCheck);
  const isElectricCheck = useSelector(getIsElectricCheck);
  const isUkuleleCheck = useSelector(getIsUkuleleCheck);

  const handleGuitarStringCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPageNumber(0));
    switch (target.name) {
      case StringCount.FourStrings:
        dispatch(setIsFourStringsCheck(target.checked));
        dispatch(setIsAcousticCheck(false));
        queryParams.set(QueryParam.FourString, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case StringCount.SixStrings:
        dispatch(setIsSixStringsCheck(target.checked));
        dispatch(setIsUkuleleCheck(false));
        queryParams.set(QueryParam.SixString, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case StringCount.SevenStrings:
        dispatch(setIsSevenStringsCheck(target.checked));
        queryParams.set(QueryParam.SevenString, String(+target.checked));
        dispatch(setIsUkuleleCheck(false));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case StringCount.TwelveStrings:
        dispatch(setIsTwelveStringsCheck(target.checked));
        dispatch(setIsUkuleleCheck(false));
        dispatch(setIsElectricCheck(false));
        queryParams.set(QueryParam.TwelveString, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      <div className="form-checkbox catalog-filter__block-item">
        {isUkuleleCheck || isElectricCheck ||
          (!isUkuleleCheck && !isElectricCheck && !isAcousticCheck) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id={StringCount.FourStrings}
            name={StringCount.FourStrings}
            checked={queryParams.has(QueryParam.FourString) ? Boolean(Number(queryParams.get(QueryParam.FourString))) : false}
            onChange={handleGuitarStringCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="4-strings"
            name="4-strings"
            checked={queryParams.has(QueryParam.FourString) ? Boolean(Number(queryParams.get(QueryParam.FourString))) : false}
            onChange={handleGuitarStringCheck}
            disabled
          />}
        <label htmlFor="4-strings">4</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        {isAcousticCheck || isElectricCheck ||
          (!isUkuleleCheck && !isElectricCheck && !isAcousticCheck) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="6-strings"
            name="6-strings"
            checked={queryParams.has(QueryParam.SixString) ? Boolean(Number(queryParams.get(QueryParam.SixString))) : false}
            onChange={handleGuitarStringCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="6-strings"
            name="6-strings"
            checked={queryParams.has(QueryParam.SixString) ? Boolean(Number(queryParams.get(QueryParam.SixString))) : false}
            onChange={handleGuitarStringCheck}
            disabled
          />}
        <label htmlFor="6-strings">6</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        {isAcousticCheck || isElectricCheck ||
          (!isUkuleleCheck && !isElectricCheck && !isAcousticCheck) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="7-strings"
            name="7-strings"
            checked={queryParams.has(QueryParam.SevenString) ? Boolean(Number(queryParams.get(QueryParam.SevenString))) : false}
            onChange={handleGuitarStringCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="7-strings"
            name="7-strings"
            checked={queryParams.has(QueryParam.SevenString) ? Boolean(Number(queryParams.get(QueryParam.SevenString))) : false}
            onChange={handleGuitarStringCheck}
            disabled
          />}

        <label htmlFor="7-strings">7</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        {isAcousticCheck ||
          (!isUkuleleCheck && !isElectricCheck && !isAcousticCheck) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="12-strings"
            name="12-strings"
            checked={queryParams.has(QueryParam.TwelveString) ? Boolean(Number(queryParams.get(QueryParam.TwelveString))) : false}
            onChange={handleGuitarStringCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="12-strings"
            name="12-strings"
            checked={queryParams.has(QueryParam.TwelveString) ? Boolean(Number(queryParams.get(QueryParam.TwelveString))) : false}
            onChange={handleGuitarStringCheck}
            disabled
          />}
        <label htmlFor="12-strings">12</label>
      </div>
    </fieldset>
  );
}

export default CatalogFilterStringCount;
