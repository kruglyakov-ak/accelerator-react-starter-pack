import { useDispatch, useSelector } from 'react-redux';
import { GuitarType } from '../../const';
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

function CatalogFilterType(): JSX.Element {
  const dispatch = useDispatch();
  const isAcousticCheck = useSelector(getIsAcousticCheck);
  const isElectricCheck = useSelector(getIsElectricCheck);
  const isUkuleleCheck = useSelector(getIsUkuleleCheck);
  const isFourStringsCheck = useSelector(getIsFourStringsCheck);
  const isSixStringsCheck = useSelector(getIsSixStringsCheck);
  const isSevenStringsCheck = useSelector(getIsSevenStringsCheck);
  const isTwelveStringsCheck = useSelector(getIsTwelveStringsCheck);

  const handleGuitarTypeCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPageNumber(0));
    switch (target.name) {
      case GuitarType.Acoustic:
        dispatch(setIsAcousticCheck(target.checked));
        dispatch(setIsFourStringsCheck(false));
        break;
      case GuitarType.Electric:
        dispatch(setIsElectricCheck(target.checked));
        dispatch(setIsTwelveStringsCheck(false));
        break;
      case GuitarType.Ukulele:
        dispatch(setIsUkuleleCheck(target.checked));
        dispatch(setIsSevenStringsCheck(false));
        dispatch(setIsSixStringsCheck(false));
        dispatch(setIsTwelveStringsCheck(false));
        break;
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      <div className="form-checkbox catalog-filter__block-item">
        {isSixStringsCheck || isSevenStringsCheck || isTwelveStringsCheck ||
          (!isSixStringsCheck && !isSevenStringsCheck && !isTwelveStringsCheck && !isFourStringsCheck) ?
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
        {isSixStringsCheck || isSevenStringsCheck || isFourStringsCheck ||
          (!isSixStringsCheck && !isSevenStringsCheck && !isTwelveStringsCheck && !isFourStringsCheck) ?
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
        {isFourStringsCheck ||
          (!isSixStringsCheck && !isSevenStringsCheck && !isTwelveStringsCheck && !isFourStringsCheck) ?
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
