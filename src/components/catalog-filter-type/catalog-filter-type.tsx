import { useHistory } from 'react-router-dom';
import { AppRoute, BooleanToString, GuitarType, QueryParam } from '../../const';
import { useQueryParams } from '../../hooks/use-query-params';

function CatalogFilterType(): JSX.Element {
  const history = useHistory();
  const queryParams = useQueryParams();
  const handleGuitarTypeCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    queryParams.set(QueryParam.CurrentPageNumber, '0');
    switch (target.name) {
      case GuitarType.Acoustic:
        if (target.checked &&
          (!queryParams.has(QueryParam.UkuleleType) || queryParams.get(QueryParam.UkuleleType) === BooleanToString.False) &&
          (!queryParams.has(QueryParam.ElectricType) || queryParams.get(QueryParam.ElectricType) === BooleanToString.False)) {
          queryParams.set(QueryParam.FourString, BooleanToString.False);
        }
        queryParams.set(QueryParam.AcusticType, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case GuitarType.Electric:
        if (target.checked &&
          (!queryParams.has(QueryParam.AcusticType) || queryParams.get(QueryParam.AcusticType) === BooleanToString.False)) {
          queryParams.set(QueryParam.TwelveString, BooleanToString.False);
        }
        queryParams.set(QueryParam.ElectricType, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case GuitarType.Ukulele:
        if (target.checked &&
          (!queryParams.has(QueryParam.AcusticType) || queryParams.get(QueryParam.AcusticType) === BooleanToString.False) &&
          (!queryParams.has(QueryParam.ElectricType) || queryParams.get(QueryParam.ElectricType) === BooleanToString.False)) {
          queryParams.set(QueryParam.SixString, BooleanToString.False);
          queryParams.set(QueryParam.SevenString, BooleanToString.False);
          queryParams.set(QueryParam.TwelveString, BooleanToString.False);
        }
        queryParams.set(QueryParam.UkuleleType, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      <div className="form-checkbox catalog-filter__block-item">
        {(queryParams.has(QueryParam.SevenString) && queryParams.get(QueryParam.SevenString) === BooleanToString.True) ||
          (queryParams.has(QueryParam.SixString) && queryParams.get(QueryParam.SixString) === BooleanToString.True) ||
          (queryParams.has(QueryParam.TwelveString) && queryParams.get(QueryParam.TwelveString) === BooleanToString.True) ||
          ((!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.SixString) || queryParams.get(QueryParam.SixString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.SevenString) || queryParams.get(QueryParam.SevenString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.TwelveString) || queryParams.get(QueryParam.TwelveString) === BooleanToString.False)) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="acoustic"
            name="acoustic"
            checked={queryParams.has(QueryParam.AcusticType) ? Boolean(Number(queryParams.get(QueryParam.AcusticType))) : false}
            onChange={handleGuitarTypeCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="acoustic"
            name="acoustic"
            checked={queryParams.has(QueryParam.AcusticType) ? Boolean(Number(queryParams.get(QueryParam.AcusticType))) : false}
            onChange={handleGuitarTypeCheck}
            disabled
          />}

        <label htmlFor="acoustic">Акустические гитары</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        {(queryParams.has(QueryParam.SevenString) && queryParams.get(QueryParam.SevenString) === BooleanToString.True) ||
          (queryParams.has(QueryParam.SixString) && queryParams.get(QueryParam.SixString) === BooleanToString.True) ||
          (queryParams.has(QueryParam.FourString) && queryParams.get(QueryParam.FourString) === BooleanToString.True) ||
          ((!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.SixString) || queryParams.get(QueryParam.SixString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.SevenString) || queryParams.get(QueryParam.SevenString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.TwelveString) || queryParams.get(QueryParam.TwelveString) === BooleanToString.False)) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="electric"
            name="electric"
            checked={queryParams.has(QueryParam.ElectricType) ? Boolean(Number(queryParams.get(QueryParam.ElectricType))) : false}
            onChange={handleGuitarTypeCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="electric"
            name="electric"
            checked={queryParams.has(QueryParam.ElectricType) ? Boolean(Number(queryParams.get(QueryParam.ElectricType))) : false}
            onChange={handleGuitarTypeCheck}
            disabled
          />}

        <label htmlFor="electric">Электрогитары</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        {(queryParams.has(QueryParam.FourString) && queryParams.get(QueryParam.FourString) === BooleanToString.True) ||
          ((!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.SixString) || queryParams.get(QueryParam.SixString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.SevenString) || queryParams.get(QueryParam.SevenString) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.TwelveString) || queryParams.get(QueryParam.TwelveString) === BooleanToString.False)) ?
          <input
            className="visually-hidden"
            type="checkbox"
            id="ukulele"
            name="ukulele"
            checked={queryParams.has(QueryParam.UkuleleType) ? Boolean(Number(queryParams.get(QueryParam.UkuleleType))) : false}
            onChange={handleGuitarTypeCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="ukulele"
            name="ukulele"
            checked={queryParams.has(QueryParam.UkuleleType) ? Boolean(Number(queryParams.get(QueryParam.UkuleleType))) : false}
            onChange={handleGuitarTypeCheck}
            disabled
          />}

        <label htmlFor="ukulele">Укулеле</label>
      </div>
    </fieldset>
  );
}

export default CatalogFilterType;
