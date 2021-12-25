import { useDispatch, useSelector } from 'react-redux';
import { GuitarType } from '../../const';
import {
  setIsAcousticCheck,
  setIsElectricCheck,
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
} from '../../store/selectors';

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

  return (
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
  );
}

export default CatalogFilterType;
