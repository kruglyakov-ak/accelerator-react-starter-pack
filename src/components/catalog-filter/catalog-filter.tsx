import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultPriceRange } from '../../const';
import { changePriceRangeMax, changePriceRangeMin } from '../../store/action';
import { getPriceRangeMax, getPriceRangeMin } from '../../store/selectors';

function CatalogFilter(): JSX.Element {
  const dispatch = useDispatch();
  const priceRangeMin = useSelector(getPriceRangeMin);
  const priceRangeMax = useSelector(getPriceRangeMax);
  const [priceMin, setPriceMin] = useState(DefaultPriceRange.Min);
  const [priceMax, setPriceMax] = useState(DefaultPriceRange.Max);

  const handlePriceRangeMinChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPriceMin(+target.value);
    if (+target.value > DefaultPriceRange.Max) {
      setPriceMin(DefaultPriceRange.Max);
    }
    if (+target.value < DefaultPriceRange.Min) {
      setPriceMin(DefaultPriceRange.Min);
    }
  };

  const handlePriceRangeMaxChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPriceMax(+target.value);
    if (+target.value > DefaultPriceRange.Max) {
      setPriceMax(DefaultPriceRange.Max);
    }
    if (+target.value < DefaultPriceRange.Min) {
      setPriceMax(DefaultPriceRange.Min);
    }
  };

  useEffect(() => {
    dispatch(changePriceRangeMin(+priceMin));
  }, [dispatch, priceMin]);

  useEffect(() => {
    dispatch(changePriceRangeMax(+priceMax));
  }, [dispatch, priceMax]);

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Цена, ₽</legend>
        <div className="catalog-filter__price-range">
          <div className="form-input">
            <label className="visually-hidden">Минимальная цена</label>
            <input type="number" placeholder="1 000" id="priceMin" name="от" onChange={handlePriceRangeMinChange} value={priceRangeMin} />
          </div>
          <div className="form-input">
            <label className="visually-hidden">Максимальная цена</label>
            <input type="number" placeholder="30 000" id="priceMax" name="до" onChange={handlePriceRangeMaxChange} value={priceRangeMax} />
          </div>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="acoustic" name="acoustic" />
          <label htmlFor="acoustic">Акустические гитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="electric" name="electric" checked />
          <label htmlFor="electric">Электрогитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="ukulele" name="ukulele" checked />
          <label htmlFor="ukulele">Укулеле</label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked />
          <label htmlFor="4-strings">4</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked />
          <label htmlFor="6-strings">6</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings" />
          <label htmlFor="7-strings">7</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled />
          <label htmlFor="12-strings">12</label>
        </div>
      </fieldset>
    </form>
  );
}

export default CatalogFilter;