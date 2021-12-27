import { useDispatch, useSelector } from 'react-redux';
import { StringCount } from '../../const';
import {
  setCurrentPageNumber,
  setIsFourStringsCheck,
  setIsSevenStringsCheck,
  setIsSixStringsCheck,
  setIsTwelveStringsCheck
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
  );
}

export default CatalogFilterStringCount;
