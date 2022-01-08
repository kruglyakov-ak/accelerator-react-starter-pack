import { useHistory } from 'react-router-dom';
import { AppRoute, BooleanToString, QueryParam, StringCount } from '../../const';
import { useQueryParams } from '../../hooks/use-query-params';

function CatalogFilterStringCount(): JSX.Element {
  const history = useHistory();
  const queryParams = useQueryParams();

  const handleGuitarStringCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    queryParams.set(QueryParam.CurrentPageNumber, '0');
    switch (target.name) {
      case StringCount.FourStrings:
        if (target.checked &&
          (!queryParams.has(QueryParam.SixString) || queryParams.get(QueryParam.SixString) === BooleanToString.False) &&
          (!queryParams.has(QueryParam.SevenString) || queryParams.get(QueryParam.SevenString) === BooleanToString.False) && (!queryParams.has(QueryParam.TwelveString) || queryParams.get(QueryParam.TwelveString) === BooleanToString.False)) {
          queryParams.set(QueryParam.AcusticType, BooleanToString.False);
        }
        queryParams.set(QueryParam.FourString, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case StringCount.SixStrings:
        if (target.checked &&
          (!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === BooleanToString.False)) {
          queryParams.set(QueryParam.UkuleleType, BooleanToString.False);
        }
        queryParams.set(QueryParam.SixString, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case StringCount.SevenStrings:
        if (target.checked &&
          (!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === BooleanToString.False)) {
          queryParams.set(QueryParam.UkuleleType, BooleanToString.False);
        }
        queryParams.set(QueryParam.SevenString, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
      case StringCount.TwelveStrings:
        if (target.checked &&
          (!queryParams.has(QueryParam.SixString) || queryParams.get(QueryParam.SixString) === BooleanToString.False) &&
          (!queryParams.has(QueryParam.SevenString) || queryParams.get(QueryParam.SevenString) === BooleanToString.False) && (!queryParams.has(QueryParam.FourString) || queryParams.get(QueryParam.FourString) === BooleanToString.False)) {
          queryParams.set(QueryParam.ElectricType, BooleanToString.False);
          queryParams.set(QueryParam.UkuleleType, BooleanToString.False);
        }
        queryParams.set(QueryParam.TwelveString, String(+target.checked));
        history.push(`${AppRoute.Query}${queryParams.toString()}`);
        break;
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      <div className="form-checkbox catalog-filter__block-item">
        {(queryParams.has(QueryParam.UkuleleType) && queryParams.get(QueryParam.UkuleleType) === BooleanToString.True) ||
          (queryParams.has(QueryParam.ElectricType) && queryParams.get(QueryParam.ElectricType) === BooleanToString.True) ||
          ((!queryParams.has(QueryParam.AcusticType) || queryParams.get(QueryParam.AcusticType) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.ElectricType) || queryParams.get(QueryParam.ElectricType) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.UkuleleType) || queryParams.get(QueryParam.UkuleleType) === BooleanToString.False)) ?
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
        {(queryParams.has(QueryParam.AcusticType) && queryParams.get(QueryParam.AcusticType) === BooleanToString.True) ||
          (queryParams.has(QueryParam.ElectricType) && queryParams.get(QueryParam.ElectricType) === BooleanToString.True) ||
          ((!queryParams.has(QueryParam.AcusticType) || queryParams.get(QueryParam.AcusticType) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.ElectricType) || queryParams.get(QueryParam.ElectricType) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.UkuleleType) || queryParams.get(QueryParam.UkuleleType) === BooleanToString.False)) ?
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
        {(queryParams.has(QueryParam.AcusticType) && queryParams.get(QueryParam.AcusticType) === BooleanToString.True) ||
          (queryParams.has(QueryParam.ElectricType) && queryParams.get(QueryParam.ElectricType) === BooleanToString.True) ||
          ((!queryParams.has(QueryParam.AcusticType) || queryParams.get(QueryParam.AcusticType) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.ElectricType) || queryParams.get(QueryParam.ElectricType) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.UkuleleType) || queryParams.get(QueryParam.UkuleleType) === BooleanToString.False)) ?
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
        {(queryParams.has(QueryParam.AcusticType) && queryParams.get(QueryParam.AcusticType) === BooleanToString.True) ||
          ((!queryParams.has(QueryParam.AcusticType) || queryParams.get(QueryParam.AcusticType) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.ElectricType) || queryParams.get(QueryParam.ElectricType) === BooleanToString.False) &&
            (!queryParams.has(QueryParam.UkuleleType) || queryParams.get(QueryParam.UkuleleType) === BooleanToString.False)) ?
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
