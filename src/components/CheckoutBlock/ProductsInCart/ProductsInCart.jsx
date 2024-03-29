import React from 'react';
import MainImg from '../../../assets/img/cartBlock/cartImg.png';
import styles from './ProductsInCart.module.scss';
import Button from '../../UI/Button/Button';

const ProductsInCart = () => (
  <div className={styles.ProductsInCart}>
    <div className={styles.Header}>
      <h2>Товары в корзине</h2>
    </div>
    <div className={styles.Main}>
      <div className={styles.MainImgAndName}>
        <div className={styles.MainImg}>
          <img src={MainImg} alt={MainImg} />
        </div>
        <p className={styles.MainName}>
          Canon EOS 6D
          (Wi-Fi) Body
          <br />
          <span>Код товара: 012212</span>
        </p>
      </div>
   
      <p className={styles.MainPrice}>
        9137
        грн
      </p>
    </div>
    <div className={styles.Footer}>
      <p className={styles.FooterDeliveryPrice}>Доставка  - 150 грн</p>
      <p className={styles.FooterTotalSum}>
        Сумма заказа:   16 619
        <span> грн</span>
      </p>
      <Button type="ordering_confirm">Подтвердить</Button>
    </div>
  </div>
    );

export default ProductsInCart;