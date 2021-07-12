/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './CartContainer.module.scss';
import Button from '../../components/UI/Button/Button';
import CartProduct from '../../components/CartBlock/CartProduct';

const CartContainer = () => {
  console.log('test');
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className={styles.CartBlock}>
      <div className="container">
        <h2 className={styles.Title}>Моя корзина</h2>
        {cart.length !== 0 ? (
          <div className={styles.Cart}>
            <ul className={styles.CartHeader}>
              <li>Товар</li>
              <li>Цена</li>
              <li>Количество</li>
              <li>Всего</li>
            </ul>
            <ul className={styles.CartMain}>
              {cart.map((cartProduct) => (
                <CartProduct
                  key={cartProduct._id}
                  cartProduct={cartProduct}
                />
))}
            </ul>
            <div className={styles.CartFooter}>
              <div>
                <Link to="/products">
                  <Button type="cart_grey">Продолжить покупки</Button>
                </Link>
              </div>
              <div className={styles.CartFooterRight}>
                <div className={styles.CartFooterRightText}>
                  Всего товаров:
                  <span>
                    {' '}
                    {cart.length}
                    {' '}
                    шт.
                  </span>
                  {' '}
                  на общую сумму
                </div>
                <div className={styles.CartFooterRightPrice}>
                  16 619
                  <span> грн</span>
                </div>
                <Link to="/checkout">
                  <Button type="cart_green">Оформить</Button>
                </Link>
              </div>
            </div>
          </div>
) : <p>Корзина пустая</p>}

      </div>
    </div>
  );
};

export default CartContainer;
