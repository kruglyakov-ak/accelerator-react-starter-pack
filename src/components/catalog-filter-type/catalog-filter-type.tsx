import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppRoute, GuitarType, QueryParam } from '../../const';
import { useQueryParams } from '../../hooks/use-query-params';
import {
  setCurrentPageNumber,
  setIsAcousticCheck,
  setIsElectricCheck,
  setIsUkuleleCheck
} from '../../store/action';
import {
  getIsAcousticCheck,
  getIsElectricCheck,
  getIsUkuleleCheck
} from '../../store/catalog-filter/selectors';

function CatalogFilterType(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const queryParams = useQueryParams();
  const isAcousticCheck = useSelector(getIsAcousticCheck);
  const isElectricCheck = useSelector(getIsElectricCheck);
  const isUkuleleCheck = useSelector(getIsUkuleleCheck);


  const handleGuitarTypeCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPageNumber(0));
    switch (target.name) {
      case GuitarType.Acoustic:
        dispatch(setIsAcousticCheck(target.checked));
        queryParams.set(QueryParam.FourString, '0');
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case GuitarType.Electric:
        dispatch(setIsElectricCheck(target.checked));
        queryParams.set(QueryParam.TwelveString, '0');
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case GuitarType.Ukulele:
        dispatch(setIsUkuleleCheck(target.checked));
        queryParams.set(QueryParam.SixString, String(0));
        queryParams.set(QueryParam.SevenString, String(0));
        queryParams.set(QueryParam.TwelveString, String(0));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      <div className="form-checkbox catalog-filter__block-item">
        {(queryParams.has(QueryParam.SevenString) && queryParams.get(QueryParam.SevenString) === '1') ||
          (queryParams.has(QueryParam.SixString) && queryParams.get(QueryParam.SixString) === '1') ||
          (queryParams.has(QueryParam.TwelveString) && queryParams.get(QueryParam.TwelveString) === '1') ||
          ((!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === '0') &&
            (!queryParams.has(QueryParam.SixString) || queryParams.get(QueryParam.SixString) === '0') &&
            (!queryParams.has(QueryParam.SevenString) || queryParams.get(QueryParam.SevenString) === '0') &&
            (!queryParams.has(QueryParam.TwelveString) || queryParams.get(QueryParam.TwelveString) === '0')) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="acoustic"
            name="acoustic"
            checked={isAcousticCheck}
            onChange={handleGuitarTypeCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="acoustic"
            name="acoustic"
            checked={isAcousticCheck}
            onChange={handleGuitarTypeCheck}
            disabled
          />}

        <label htmlFor="acoustic">Акустические гитары</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        {(queryParams.has(QueryParam.SevenString) && queryParams.get(QueryParam.SevenString) === '1') ||
          (queryParams.has(QueryParam.SixString) && queryParams.get(QueryParam.SixString) === '1') ||
          (queryParams.has(QueryParam.FourString) && queryParams.get(QueryParam.FourString) === '1') ||
          ((!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === '0') &&
            (!queryParams.has(QueryParam.SixString) || queryParams.get(QueryParam.SixString) === '0') &&
            (!queryParams.has(QueryParam.SevenString) || queryParams.get(QueryParam.SevenString) === '0') &&
            (!queryParams.has(QueryParam.TwelveString) || queryParams.get(QueryParam.TwelveString) === '0')) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="electric"
            name="electric"
            checked={isElectricCheck}
            onChange={handleGuitarTypeCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="electric"
            name="electric"
            checked={isElectricCheck}
            onChange={handleGuitarTypeCheck}
            disabled
          />}

        <label htmlFor="electric">Электрогитары</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        {(queryParams.has(QueryParam.FourString) && queryParams.get(QueryParam.FourString) === '1') ||
          ((!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === '0') &&
            (!queryParams.has(QueryParam.SixString) || queryParams.get(QueryParam.SixString) === '0') &&
            (!queryParams.has(QueryParam.SevenString) || queryParams.get(QueryParam.SevenString) === '0') &&
            (!queryParams.has(QueryParam.TwelveString) || queryParams.get(QueryParam.TwelveString) === '0')) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="ukulele"
            name="ukulele"
            checked={isUkuleleCheck}
            onChange={handleGuitarTypeCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="ukulele"
            name="ukulele"
            checked={isUkuleleCheck}
            onChange={handleGuitarTypeCheck}
            disabled
          />}

        <label htmlFor="ukulele">Укулеле</label>
      </div>
    </fieldset>
  );
}

export default CatalogFilterType;
