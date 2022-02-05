import { ChangeEvent, InvalidEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, MAX_COUNT_GUITAR_IN_CART, MIN_COUNT_GUITAR_IN_CART, PromoCode, PromoCodeValidate } from '../../const';
import { setDiscount, setTotalPrice } from '../../store/action';
import { postCoupons } from '../../store/api-actions';
import { getDiscount, getGuitarsInCart, getGuitarsInCartCount, getTotalPrice } from '../../store/cart-data/selectors';
import CartList from '../cart-list/cart-list';

function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);
  const guitarsInCartCount = useSelector(getGuitarsInCartCount);
  const guitarsInCart = useSelector(getGuitarsInCart);
  const discount = useSelector(getDiscount);
  const [couponValue, setCouponValue] = useState('');
  const [isCouponValid, setIsCouponValid] = useState(PromoCodeValidate.Unknown);
  const [priceWithDiscount, setPriceWithDiscount] = useState(totalPrice);

  useEffect(() => {
    let price = 0;
    guitarsInCart.forEach((guitar) => {
      guitarsInCartCount.forEach((count) => {
        if (guitar.id === count.id) {
          if (count.count > MAX_COUNT_GUITAR_IN_CART) {
            price = price + (guitar.price * MAX_COUNT_GUITAR_IN_CART);
          } else if (count.count < MIN_COUNT_GUITAR_IN_CART) {
            price = price + (guitar.price * MIN_COUNT_GUITAR_IN_CART);
          } else {
            price = price + (guitar.price * count.count);
          }
        }
      });
    });
    dispatch(setTotalPrice(price));
  }, [dispatch, guitarsInCart, guitarsInCartCount]);

  useEffect(() => {
    setPriceWithDiscount(discount / 100 * totalPrice);
    if (discount > 0) {
      setIsCouponValid(PromoCodeValidate.True);
    }
  }, [discount, totalPrice]);

  const handleCouponInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCouponValue(target.value.toLowerCase().trim());
  };

  const handleCouponFormSubmit = (evt: InvalidEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (Object.values(PromoCode).includes(couponValue as PromoCode) && couponValue !== PromoCode.Empty) {
      dispatch(postCoupons({ coupon: couponValue as PromoCode }, () => {
        setIsCouponValid(PromoCodeValidate.True);
      }));
    } else if (couponValue === PromoCode.Empty) {
      setIsCouponValid(PromoCodeValidate.Unknown);
      dispatch(setDiscount(0));
    } else {
      setIsCouponValid(PromoCodeValidate.False);
      dispatch(setDiscount(0));
    }
  };

  return (
    <div className="wrapper">
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <ul className="breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page">
            <li className="breadcrumbs__item"><Link to={AppRoute.Main} className="link">Главная</Link>
            </li>
            <li className="breadcrumbs__item"><Link to={AppRoute.Main} className="link">Каталог</Link>
            </li>
            <li className="breadcrumbs__item"><Link to={AppRoute.Cart} className="link">Корзина</Link>
            </li>
          </ul>
          <div className="cart">
            <CartList />

            <div className="cart__footer">
              <div className="cart__coupon coupon">
                <h2 className="title title--little coupon__title">Промокод на скидку</h2>
                <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
                <form className="coupon__form" id="coupon-form" onSubmit={handleCouponFormSubmit}>
                  <div className="form-input coupon__input">
                    <label className="visually-hidden">Промокод</label>
                    <input type="text" placeholder="Введите промокод" id="coupon" name="coupon" value={couponValue} onChange={handleCouponInputChange} />
                    {isCouponValid === PromoCodeValidate.False && <p className="form-input__message form-input__message--error">Неверный промокод</p>}
                    {isCouponValid === PromoCodeValidate.True && <p className="form-input__message form-input__message--success">Промокод принят</p>}
                  </div>
                  <button className="button button--big coupon__button">Применить</button>
                </form>
              </div>
              <div className="cart__total-info">
                <p className="cart__total-item">
                  <span className="cart__total-value-name">Всего:</span>
                  <span className="cart__total-value">{totalPrice} ₽</span>
                </p>
                <p className="cart__total-item">
                  <span className="cart__total-value-name">Скидка:</span>
                  {discount === 0 ? <span className="cart__total-value">0 ₽</span> : <span className="cart__total-value cart__total-value--bonus">{-priceWithDiscount} ₽</span>}
                </p>
                <p className="cart__total-item">
                  <span className="cart__total-value-name">К оплате:</span>
                  <span className="cart__total-value cart__total-value--payment">{totalPrice - priceWithDiscount} ₽</span>
                </p>
                <button className="button button--red button--big cart__order-button">Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
