import { useDispatch, useSelector } from 'react-redux';
import { StringCount } from '../../const';
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
  getIsFourStringsCheck,
  getIsSevenStringsCheck,
  getIsSixStringsCheck,
  getIsTwelveStringsCheck,
  getIsUkuleleCheck
} from '../../store/catalog-filter/selectors';

function CatalogFilterStringCount(): JSX.Element {
  const dispatch = useDispatch();
  const isAcousticCheck = useSelector(getIsAcousticCheck);
  const isElectricCheck = useSelector(getIsElectricCheck);
  const isUkuleleCheck = useSelector(getIsUkuleleCheck);
  const isFourStringsCheck = useSelector(getIsFourStringsCheck);
  const isSixStringsCheck = useSelector(getIsSixStringsCheck);
  const isSevenStringsCheck = useSelector(getIsSevenStringsCheck);
  const isTwelveStringsCheck = useSelector(getIsTwelveStringsCheck);

  const handleGuitarStringCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPageNumber(0));
    switch (target.name) {
      case StringCount.FourStrings:
        dispatch(setIsFourStringsCheck(target.checked));
        dispatch(setIsAcousticCheck(false));
        break;
      case StringCount.SixStrings:
        dispatch(setIsSixStringsCheck(target.checked));
        dispatch(setIsUkuleleCheck(false));
        break;
      case StringCount.SevenStrings:
        dispatch(setIsSevenStringsCheck(target.checked));
        dispatch(setIsUkuleleCheck(false));
        break;
      case StringCount.TwelveStrings:
        dispatch(setIsTwelveStringsCheck(target.checked));
        dispatch(setIsUkuleleCheck(false));
        dispatch(setIsElectricCheck(false));
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
            id="4-strings"
            name="4-strings"
            checked={isFourStringsCheck}
            onChange={handleGuitarStringCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="4-strings"
            name="4-strings"
            checked={isFourStringsCheck}
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
            checked={isSixStringsCheck}
            onChange={handleGuitarStringCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="6-strings"
            name="6-strings"
            checked={isSixStringsCheck}
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
            checked={isSevenStringsCheck}
            onChange={handleGuitarStringCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="7-strings"
            name="7-strings"
            checked={isSevenStringsCheck}
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
            checked={isTwelveStringsCheck}
            onChange={handleGuitarStringCheck}
          /> :
          <input
            className="visually-hidden"
            type="checkbox"
            id="12-strings"
            name="12-strings"
            checked={isTwelveStringsCheck}
            onChange={handleGuitarStringCheck}
            disabled
          />}
        <label htmlFor="12-strings">12</label>
      </div>
    </fieldset>
  );
}

export default CatalogFilterStringCount;
