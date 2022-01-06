import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppRoute, QueryParam } from '../../const';
import { useQueryParams } from '../../hooks/use-query-params';
import {
  setCurrentPageNumber,
  setUserPriceMax,
  setUserPriceMin
} from '../../store/action';
import {
  getPriceRangeMax,
  getPriceRangeMin
} from '../../store/catalog-filter/selectors';

function CatalogFilterPrice(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const querysParams = useQueryParams();
  const [userPriceMinValue, setUserPriceMinValue] = useState('');
  const [userPriceMaxValue, setUserPriceMaxValue] = useState('');
  const priceMin = useSelector(getPriceRangeMin);
  const priceMax = useSelector(getPriceRangeMax);

  useEffect(() => {
    if (querysParams.has(QueryParam.PriceGte)) {
      setUserPriceMinValue(String(querysParams.get(QueryParam.PriceGte)));
    }
    if (querysParams.has(QueryParam.PriceLte)) {
      setUserPriceMaxValue(String(querysParams.get(QueryParam.PriceLte)));
    }
  }, [querysParams]);

  const handlePriceMinChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserPriceMinValue(target.value);
  };
  const handlePriceMaxChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserPriceMaxValue(target.value);
  };

  const handlePriceMinBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    querysParams.set(QueryParam.PriceGte, target.value);
    if (+target.value < priceMin && target.value !== '') {
      setUserPriceMinValue(priceMin.toString());
      querysParams.set(QueryParam.PriceGte, priceMin.toString());
    }
    if (+target.value > priceMax && target.value !== '') {
      setUserPriceMinValue(priceMax.toString());
      querysParams.set(QueryParam.PriceGte, priceMax.toString());
    }
    dispatch(setCurrentPageNumber(0));
    dispatch(setUserPriceMin(target.value));
    if (target.value === '') {
      querysParams.delete(QueryParam.PriceGte);
    }
    history.push(`${AppRoute.Query}${querysParams.toString()}`);
  };

  const handlePriceMaxBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    querysParams.set(QueryParam.PriceLte, target.value);
    if (+target.value < priceMin && target.value !== '') {
      setUserPriceMaxValue(priceMin.toString());
      querysParams.set(QueryParam.PriceLte, priceMin.toString());

    }
    if (+target.value > priceMax && target.value !== '') {
      setUserPriceMaxValue(priceMax.toString());
      querysParams.set(QueryParam.PriceLte, priceMax.toString());
    }
    dispatch(setCurrentPageNumber(0));
    dispatch(setUserPriceMax(target.value));
    if (target.value === '') {
      querysParams.delete(QueryParam.PriceLte);
    }
    history.push(`${AppRoute.Query}${querysParams.toString()}`);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input
            type="number"
            placeholder={`${priceMin}`}
            id="priceMin"
            name="от"
            value={querysParams.has(QueryParam.PriceGte) ? Number(querysParams.get(QueryParam.PriceGte)) : userPriceMinValue}
            onChange={handlePriceMinChange}
            onBlur={handlePriceMinBlur}
          />
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input
            type="number"
            placeholder={`${priceMax}`}
            id="priceMax"
            name="до"
            value={querysParams.has(QueryParam.PriceLte) ? Number(querysParams.get(QueryParam.PriceLte)) : userPriceMaxValue}
            onChange={handlePriceMaxChange}
            onBlur={handlePriceMaxBlur}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default CatalogFilterPrice;
