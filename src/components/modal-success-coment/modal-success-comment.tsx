import FocusLock from 'react-focus-lock';
import ScrollLock from 'react-scrolllock';

type ModalSuccessCommentProps = {
  onSuccessModalClose: () => void
}

function ModalSuccessComment({ onSuccessModalClose }: ModalSuccessCommentProps): JSX.Element {
  return (
    <ScrollLock>
      <FocusLock>
        <div className="modal is-active modal--success modal-for-ui-kit">
          <div className="modal__wrapper">
            <div className="modal__overlay" data-close-modal="" onClick={onSuccessModalClose}></div>
            <div className="modal__content">
              <svg className="modal__icon" width="26" height="20" aria-hidden="true">
                <use xlinkHref="#icon-success"></use>
              </svg>
              <p className="modal__message">Спасибо за ваш отзыв!</p>
              <div className="modal__button-container modal__button-container--review">
                <button className="button button--small modal__button modal__button--review" onClick={onSuccessModalClose}>К покупкам!</button>
              </div>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={onSuccessModalClose}>
                <span className="button-cross__icon"></span>
                <span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </div>
        </div>
      </FocusLock>
    </ScrollLock>
  );
}

export default ModalSuccessComment;
