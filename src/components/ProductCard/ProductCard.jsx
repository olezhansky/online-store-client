/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
// import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
import cardProduct from '../../assets/img/CardProduct/cardProduct.png';

const ProductCard = ({product}) => {
  console.log('test');
  // debugger;
  return (
    <div className={styles.ProductCard}>
      <Link to="/single-product">
        <div className={styles.ProductCardImg}>
        
          <img src={product.imageUrls[0]} alt={cardProduct} />
          {true && <div className={styles.ProductCardImgHitSale}>Хит продаж</div>}
        
        </div>
        <h2 className={styles.ProductCardName}>
          {product.name}
          {/* Canon PowerShot G9X II
          Silver */}
        </h2>
      </Link>
      <div className={styles.ProductCardPriceAndIconCart}>
        <p className={styles.ProductCardPriceBlock}>
          <span className={styles.ProductCardOldPrice}>29 999 грн</span>
          <br />
          <span className={styles.ProductCardNewPrice}> 21 473 грн</span>
          <br />
          <span className={styles.ProductCardPrice}> 21 473 грн</span>
          <br />
          <span className={styles.ProductCardInStock}>в наличии</span>
          <span className={styles.ProductCardIsExpected}>ожидается</span>
        </p>
        <div className={styles.ProductCardIconCart}><BiCart /></div>
      </div>
      <div className={styles.ProductCardInfo}>
        <p>
          Матрица 22.3 x 14.9 мм, 24.2 Мп поддержка карт памяти SD/SDHC/SDXCСенсорный ЖК-дисплей
          с переменным углом наклона
          Clear View II TFT 3 / FullHD-видео / питание от литий-ионного аккумулятора
          / 131 x 76.2 x 99.9 мм, 532 г
        </p>
     
      </div>
    </div>
  );
};

// ProductCard.propTypes = {
//   product: PropTypes.objectOf.isRequired
// };

export default ProductCard;
