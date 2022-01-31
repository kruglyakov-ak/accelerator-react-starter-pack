import FocusLock from 'react-focus-lock';
import { useDispatch } from 'react-redux';
import ScrollLock from 'react-scrolllock';
import { deleteGuitarInCart, setTotalPrices } from '../../store/action';
import { Guitar } from '../../types/guitar';
import { changeGuitarTypeToReadable } from '../../utils/utils';

type ModalDeleteProps = {
  guitar: Guitar,
  totalPrice: number,
  onDeleteModalClose: () => void
}

function ModalDelete({ guitar, onDeleteModalClose, totalPrice }: ModalDeleteProps): JSX.Element {
  const dispatch = useDispatch();

  const {
    previewImg,
    name,
    vendorCode,
    type,
    stringCount,
    price,
  } = guitar;

  const handleDeleteButtonClick = () => {
    dispatch(deleteGuitarInCart(guitar));
    dispatch(setTotalPrices(-totalPrice));
  };

  return (
    <ScrollLock>
      <FocusLock>
        <div className="modal is-active modal-for-ui-kit">
          <div className="modal__wrapper">
            <div className="modal__overlay" data-close-modal=""></div>
            <div className="modal__content">
              <h2 className="modal__header title title--medium title--red">Удалить этот товар?</h2>
              <div className="modal__info"><img className="modal__img" src={`/${previewImg}`} alt={name} width="67" height="137"/>
                <div className="modal__info-wrapper">
                  <h3 className="modal__product-name title title--little title--uppercase">{name}</h3>
                  <p className="modal__product-params modal__product-params--margin-11">Артикул: {vendorCode}</p>
                  <p className="modal__product-params">{changeGuitarTypeToReadable(type)},<br /> {stringCount} струнная</p>
                  <p className="modal__price-wrapper"><span className="modal__price">Цена:</span><span className="modal__price">{price} ₽</span></p>
                </div>
              </div>
              <div className="modal__button-container">
                <button className="button button--small modal__button" onClick={handleDeleteButtonClick}>Удалить товар</button>
                <button className="button button--black-border button--small modal__button modal__button--right" onClick={onDeleteModalClose}>Продолжить покупки</button>
              </div>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={onDeleteModalClose}><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </div>
        </div>
      </FocusLock>
    </ScrollLock>
  );
}

export default ModalDelete;
