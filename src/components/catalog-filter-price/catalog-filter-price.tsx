import { useState } from 'react';
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
  const queryParams = useQueryParams();
  const [userPriceMinValue, setUserPriceMinValue] = useState('');
  const [userPriceMaxValue, setUserPriceMaxValue] = useState('');
  const priceMin = useSelector(getPriceRangeMin);
  const priceMax = useSelector(getPriceRangeMax);

  const handlePriceMinChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserPriceMinValue(target.value);
  };
  const handlePriceMaxChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserPriceMaxValue(target.value);
  };

  const handlePriceMinBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    queryParams.set(QueryParam.PriceGte, target.value);
    if (+target.value < priceMin && target.value !== '') {
      setUserPriceMinValue(priceMin.toString());
      queryParams.set(QueryParam.PriceGte, priceMin.toString());
    }
    if (+target.value > priceMax && target.value !== '') {
      setUserPriceMinValue(priceMax.toString());
      queryParams.set(QueryParam.PriceGte, priceMax.toString());
    }
    if (+target.value > +userPriceMaxValue && userPriceMaxValue !== '') {
      setUserPriceMinValue(userPriceMaxValue);
      queryParams.set(QueryParam.PriceGte, userPriceMaxValue);
    }
    dispatch(setCurrentPageNumber(0));
    dispatch(setUserPriceMin(target.value));
    if (target.value === '') {
      queryParams.delete(QueryParam.PriceGte);
    }
    history.push(`${AppRoute.Query}${queryParams.toString()}`);
  };

  const handlePriceMaxBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    queryParams.set(QueryParam.PriceLte, target.value);
    if (+target.value < priceMin && target.value !== '') {
      setUserPriceMaxValue(priceMin.toString());
      queryParams.set(QueryParam.PriceLte, priceMin.toString());

    }
    if (+target.value > priceMax && target.value !== '') {
      setUserPriceMaxValue(priceMax.toString());
      queryParams.set(QueryParam.PriceLte, priceMax.toString());
    }
    if (+target.value < +userPriceMinValue && userPriceMinValue !== '') {
      setUserPriceMaxValue(userPriceMinValue);
      queryParams.set(QueryParam.PriceLte, userPriceMinValue);
    }
    dispatch(setCurrentPageNumber(0));
    dispatch(setUserPriceMax(target.value));
    if (target.value === '') {
      queryParams.delete(QueryParam.PriceLte);
    }
    history.push(`${AppRoute.Query}${queryParams.toString()}`);
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
            value={userPriceMinValue}
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
            value={userPriceMaxValue}
            onChange={handlePriceMaxChange}
            onBlur={handlePriceMaxBlur}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default CatalogFilterPrice;
