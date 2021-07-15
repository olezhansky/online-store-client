/* eslint-disable react/prop-types */
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Button from '../../UI/Button/Button';
import styles from './SingleProductContent.module.scss';

const SingleProductContent = ({singleProduct}) => {
    console.log('test');
    return (
      <div className={styles.Wrapper}>
        <p className={styles.InStock}>{singleProduct.quantity !== 0 && <span>в наличии</span>}</p>
        <p className={styles.Price}>
          {singleProduct.currentPrice }
          {' '}
          грн
        </p>
        <div className={styles.ButtonBuy}>
          <Button addClass="cart_green">
            <span>Купить</span>
            <FiShoppingCart />
          </Button>
        </div>
        <p className={styles.Delivery}>
          Доставка
        </p>
        <ul className={styles.DeliveryList}>
          <li>
            • Доставка по всей Украине
          </li>
          <li>• Оплата товара при получении</li>
          <li>
            • Возможен самовывоз
          </li>
        </ul>
       
      </div>
    );
};

export default SingleProductContent;