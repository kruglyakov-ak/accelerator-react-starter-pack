import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GuitarType, StringCount } from '../../const';
import {
  setIsAcousticCheck,
  setIsElectricCheck,
  setIsFourStringsCheck,
  setIsSevenStringsCheck,
  setIsSixStringsCheck,
  setIsTwelveStringsCheck,
  setIsUkuleleCheck,
  setUserPriceMax,
  setUserPriceMin
} from '../../store/action';
import {
  getIsAcousticCheck,
  getIsElectricCheck,
  getIsFourStringsCheck,
  getIsSevenStringsCheck,
  getIsSixStringsCheck,
  getIsTwelveStringsCheck,
  getIsUkuleleCheck,
  getPriceRangeMax,
  getPriceRangeMin
} from '../../store/selectors';

function CatalogFilter(): JSX.Element {
  const dispatch = useDispatch();
  const [userPriceMinValue, setUserPriceMinValue] = useState('');
  const [userPriceMaxValue, setUserPriceMaxValue] = useState('');
  const priceMin = useSelector(getPriceRangeMin);
  const priceMax = useSelector(getPriceRangeMax);
  const isAcousticCheck = useSelector(getIsAcousticCheck);
  const isElectricCheck = useSelector(getIsElectricCheck);
  const isUkuleleCheck = useSelector(getIsUkuleleCheck);
  const isFourStringsCheck = useSelector(getIsFourStringsCheck);
  const isSixStringsCheck = useSelector(getIsSixStringsCheck);
  const isSevenStringsCheck = useSelector(getIsSevenStringsCheck);
  const isTwelveStringsCheck = useSelector(getIsTwelveStringsCheck);

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

  const handleGuitarTypeCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    switch (target.name) {
      case GuitarType.Acoustic:
        dispatch(setIsAcousticCheck(target.checked));
        break;
      case GuitarType.Electric:
        dispatch(setIsElectricCheck(target.checked));
        break;
      case GuitarType.Ukulele:
        dispatch(setIsUkuleleCheck(target.checked));
        break;
    }
  };

  const handleGuitarStringCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    switch (target.name) {
      case StringCount.FourStrings:
        dispatch(setIsFourStringsCheck(target.checked));
        break;
      case StringCount.SixStrings:
        dispatch(setIsSixStringsCheck(target.checked));
        break;
      case StringCount.SevenStrings:
        dispatch(setIsSevenStringsCheck(target.checked));
        break;
      case StringCount.TwelveStrings:
        dispatch(setIsTwelveStringsCheck(target.checked));
        break;
    }
  };

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
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
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        <div className="form-checkbox catalog-filter__block-item">
          {isFourStringsCheck ?
            <input
              className="visually-hidden"
              type="checkbox"
              id="acoustic"
              name="acoustic"
              checked={isAcousticCheck}
              onChange={handleGuitarTypeCheck}
              disabled
            /> :
            <input
              className="visually-hidden"
              type="checkbox"
              id="acoustic"
              name="acoustic"
              checked={isAcousticCheck}
              onChange={handleGuitarTypeCheck}
            />}

          <label htmlFor="acoustic">Акустические гитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          {isTwelveStringsCheck ?
            <input
              className="visually-hidden"
              type="checkbox"
              id="electric"
              name="electric"
              checked={isElectricCheck}
              onChange={handleGuitarTypeCheck}
              disabled
            /> :
            <input
              className="visually-hidden"
              type="checkbox"
              id="electric"
              name="electric"
              checked={isElectricCheck}
              onChange={handleGuitarTypeCheck}
            />}

          <label htmlFor="electric">Электрогитары</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          {isTwelveStringsCheck || isSixStringsCheck || isSevenStringsCheck ?
            <input
              className="visually-hidden"
              type="checkbox"
              id="ukulele"
              name="ukulele"
              checked={isUkuleleCheck}
              onChange={handleGuitarTypeCheck}
              disabled
            /> :
            <input
              className="visually-hidden"
              type="checkbox"
              id="ukulele"
              name="ukulele"
              checked={isUkuleleCheck}
              onChange={handleGuitarTypeCheck}
            />}

          <label htmlFor="ukulele">Укулеле</label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        <div className="form-checkbox catalog-filter__block-item">
          {isAcousticCheck ?
            <input
              className="visually-hidden"
              type="checkbox"
              id="4-strings"
              name="4-strings"
              checked={isFourStringsCheck}
              onChange={handleGuitarStringCheck}
              disabled
            /> :
            <input
              className="visually-hidden"
              type="checkbox"
              id="4-strings"
              name="4-strings"
              checked={isFourStringsCheck}
              onChange={handleGuitarStringCheck}
            />}

          <label htmlFor="4-strings">4</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          {isUkuleleCheck ?
            <input
              className="visually-hidden"
              type="checkbox"
              id="6-strings"
              name="6-strings"
              checked={isSixStringsCheck}
              onChange={handleGuitarStringCheck}
              disabled
            /> :
            <input
              className="visually-hidden"
              type="checkbox"
              id="6-strings"
              name="6-strings"
              checked={isSixStringsCheck}
              onChange={handleGuitarStringCheck}
            />}
          <label htmlFor="6-strings">6</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          {isUkuleleCheck ?
            <input
              className="visually-hidden"
              type="checkbox"
              id="7-strings"
              name="7-strings"
              checked={isSevenStringsCheck}
              onChange={handleGuitarStringCheck}
              disabled
            /> :
            <input
              className="visually-hidden"
              type="checkbox"
              id="7-strings"
              name="7-strings"
              checked={isSevenStringsCheck}
              onChange={handleGuitarStringCheck}
            />}

          <label htmlFor="7-strings">7</label>
        </div>
        <div className="form-checkbox catalog-filter__block-item">
          {isElectricCheck || isUkuleleCheck ?
            <input
              className="visually-hidden"
              type="checkbox"
              id="12-strings"
              name="12-strings"
              checked={isTwelveStringsCheck}
              onChange={handleGuitarStringCheck}
              disabled
            /> :
            <input
              className="visually-hidden"
              type="checkbox"
              id="12-strings"
              name="12-strings"
              checked={isTwelveStringsCheck}
              onChange={handleGuitarStringCheck}
            />}
          <label htmlFor="12-strings">12</label>
        </div>
      </fieldset>
    </form>
  );
}

export default CatalogFilter;
