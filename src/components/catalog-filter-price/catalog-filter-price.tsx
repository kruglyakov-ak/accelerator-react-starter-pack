import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserPriceMax,
  setUserPriceMin
} from '../../store/action';
import {
  getPriceRangeMax,
  getPriceRangeMin
} from '../../store/selectors';

function CatalogFilterPrice(): JSX.Element {
  const dispatch = useDispatch();
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
    if (+target.value < priceMin && target.value !== '') {
      setUserPriceMinValue(`${priceMin}`);
    }
    if (+target.value > priceMax && target.value !== '') {
      setUserPriceMinValue(`${priceMax}`);
    }
    dispatch(setUserPriceMin(target.value));
  };

  const handlePriceMaxBlur = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (+target.value < priceMin && target.value !== '') {
      setUserPriceMaxValue(`${priceMin}`);
    }
    if (+target.value > priceMax && target.value !== '') {
      setUserPriceMaxValue(`${priceMax}`);
    }
    dispatch(setUserPriceMax(target.value));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input type="number" placeholder={`${priceMin}`} id="priceMin" name="от" value={userPriceMinValue} onChange={handlePriceMinChange} onBlur={handlePriceMinBlur} />
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input type="number" placeholder={`${priceMax}`} id="priceMax" name="до" value={userPriceMaxValue} onChange={handlePriceMaxChange} onBlur={handlePriceMaxBlur} />
        </div>
      </div>
    </fieldset>
  );
}

export default CatalogFilterPrice;
