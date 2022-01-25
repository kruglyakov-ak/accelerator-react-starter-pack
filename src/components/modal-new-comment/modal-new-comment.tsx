import { InvalidEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RatingCountNumber } from '../../const';
import { postComments } from '../../store/api-actions';

type ModalNewCommentProps = {
  isModalReviewFormOpen: boolean,
  name: string,
  guitarId: string,
  onReviewModalClose: () => void
  onSuccessModalOpen: () => void
}

function ModalNewComment({ name, onReviewModalClose, isModalReviewFormOpen, guitarId, onSuccessModalOpen }: ModalNewCommentProps): JSX.Element {
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState('');
  const [rateValue, setRateValue] = useState('');
  const [advantagesValue, setAdvantagesValue] = useState('');
  const [disadvantagesValue, setDisadvantagesValue] = useState('');
  const [commentValue, setCommentValue] = useState('');

  const handleRateRadioClick = ({ target }: InvalidEvent<HTMLInputElement>) => {
    setRateValue(target.value);
  };

  const handleNameInputChange = ({ target }: InvalidEvent<HTMLInputElement>) => {
    setNameValue(target.value);
  };

  const handleAdvantagesInputChange = ({ target }: InvalidEvent<HTMLInputElement>) => {
    setAdvantagesValue(target.value);
  };

  const handleDisadvantagesInputChange = ({ target }: InvalidEvent<HTMLInputElement>) => {
    setDisadvantagesValue(target.value);
  };

  const handleCommentInputChange = ({ target }: InvalidEvent<HTMLTextAreaElement>) => {
    setCommentValue(target.value);
  };

  const onSuccessPost = () => {
    onReviewModalClose();
    onSuccessModalOpen();
  };

  const handleSubmitComment = (evt: InvalidEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (nameValue !== '' &&
      rateValue !== '' &&
      advantagesValue !== '' &&
      disadvantagesValue !== '' &&
      commentValue !== '') {
      dispatch(postComments(guitarId, {
        guitarId: +guitarId,
        userName: nameValue,
        advantage: advantagesValue,
        disadvantage: disadvantagesValue,
        comment: commentValue,
        rating: +rateValue,
      }, onSuccessPost));
    }
  };

  useEffect(() => {
    if (!isModalReviewFormOpen) {
      setNameValue('');
      setRateValue('');
      setAdvantagesValue('');
      setDisadvantagesValue('');
      setCommentValue('');
    }
  }, [isModalReviewFormOpen]);

  return (
    <div className="modal is-active modal--review modal-for-ui-kit">
      <div className="modal__wrapper" >
        <div className="modal__overlay" data-close-modal="" onClick={onReviewModalClose}></div>
        <div className="modal__content">
          <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
          <h3 className="modal__product-name title title--medium-20 title--uppercase">{name}</h3>
          <form className="form-review" onSubmit={handleSubmitComment}>
            <div className="form-review__wrapper">
              <div className="form-review__name-wrapper">

                <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                <input
                  id="user-name"
                  className="form-review__input form-review__input--name"
                  type="text"
                  autoComplete="off"
                  value={nameValue}
                  onChange={handleNameInputChange}
                  required
                />
                {nameValue === '' && <span className="form-review__warning">Заполните поле</span>}
              </div>

              <div>
                <span className="form-review__label form-review__label--required">Ваша Оценка</span>
                <div className="rate rate--reverse">
                  <input className="visually-hidden" type="radio" id="star-5" name="rate" value="5" onChange={handleRateRadioClick} checked={rateValue === String(RatingCountNumber.Five)} required />
                  <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                  <input className="visually-hidden" type="radio" id="star-4" name="rate" value="4" onChange={handleRateRadioClick} checked={rateValue === String(RatingCountNumber.Four)} required />
                  <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                  <input className="visually-hidden" type="radio" id="star-3" name="rate" value="3" onChange={handleRateRadioClick} checked={rateValue === String(RatingCountNumber.Three)} required />
                  <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                  <input className="visually-hidden" type="radio" id="star-2" name="rate" value="2" onChange={handleRateRadioClick} checked={rateValue === String(RatingCountNumber.Two)} required />
                  <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                  <input className="visually-hidden" type="radio" id="star-1" name="rate" value="1" onChange={handleRateRadioClick} checked={rateValue === String(RatingCountNumber.One)} required />
                  <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                  <span className="rate__count"></span>
                  {rateValue === '' && <span className="rate__message">Поставьте оценку</span>}
                </div>
              </div>
            </div>
            <div>
              <label className="form-review__label form-review__label--required" htmlFor="user-advantages">Достоинства</label>
              <input
                id="user-advantages"
                className="form-review__input"
                type="text"
                autoComplete="off"
                value={advantagesValue}
                onChange={handleAdvantagesInputChange}
                required
              />
              {advantagesValue === '' && <span className="form-review__warning">Заполните поле</span>}
            </div>
            <div>
              <label className="form-review__label form-review__label--required" htmlFor="user-disadvantages">Недостатки</label>
              <input
                className="form-review__input"
                id="user-disadvantages"
                type="text"
                autoComplete="off"
                value={disadvantagesValue}
                onChange={handleDisadvantagesInputChange}
                required
              />
              {disadvantagesValue === '' && <span className="form-review__warning">Заполните поле</span>}
            </div>
            <div>
              <label className="form-review__label form-review__label--required" htmlFor="user-comment">Комментарий</label>
              <textarea
                className="form-review__input form-review__input--textarea"
                id="user-comment"
                rows={10}
                autoComplete="off"
                onChange={handleCommentInputChange}
                value={commentValue}
                required
              >
              </textarea>
              {commentValue === '' && <span className="form-review__warning">Заполните поле</span>}
            </div>
            <button className="button button--medium-20 form-review__button" type="submit">Отправить отзыв</button>
          </form>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={onReviewModalClose}><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalNewComment;
