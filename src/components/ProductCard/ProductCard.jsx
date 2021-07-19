/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductCard.module.scss';
import { addProductToCartAction } from '../../store/cart/actions';
import { setFlagInCartAction } from '../../store/products/actions';
import { setSingleProductAction } from '../../store/singleProduct/actions';

const ProductCard = ({product}) => {
  const cart = useSelector((state) => state.cart.cart);
  const isInCart = cart.some((item) => item._id === product._id);
  const dispatch = useDispatch();
  if (!product) return null;
  const addProductToCartHandler = () => {
    dispatch(addProductToCartAction(product));
    dispatch(setFlagInCartAction(product));
  };

  const dispatchSingleProductHandler = () => {
    dispatch(setSingleProductAction(product));
  };

  return (
    <div className={styles.ProductCard} onClick={dispatchSingleProductHandler}>
      <Link to="/products/single-product">
        <div className={styles.ProductCardImg}>
          <img src={product.imageUrls[0]} alt={product.imageUrls[0]} />
          {product.hit[1] === 'yes' && <div className={styles.ProductCardImgHitSale}>Хит продаж</div>}
        </div>
        <h2 className={styles.ProductCardName}>
          {product.model[1]}
        </h2>
      </Link>
      <div className={styles.ProductCardPriceAndIconCart}>
        <p className={styles.ProductCardPriceBlock}>
          {(product.previousPrice !== 0
          ? (
            <span className={styles.ProductCardOldPrice}>
              {product.previousPrice[1]}
              {' '}
              грн
            </span>
) : <p className={styles.ProductCardOldPriceSpace}>&nbsp;</p>)}
          <br />
          {product.previousPrice[1]
          ? (
            <span className={styles.ProductCardNewPrice}>
              {product.currentPrice[1]}
              {' '}
              грн
            </span>
)
          : (
            <span className={styles.ProductCardPrice}>
              {product.currentPrice}
              {' '}
              грн
            </span>
)}
          <br />
          {product.quantity !== 0
            ? <span className={styles.ProductCardInStock}>в наличии</span>
          : <span className={styles.ProductCardIsExpected}>ожидается</span>}
        </p>
        <div className={styles.ProductCardIconCart} onClick={addProductToCartHandler}>
          {isInCart ? <FaShoppingCart /> : <BiCart />}
          {isInCart && <span><GiCheckMark /></span>}
        </div>
      </div>
      <div className={styles.ProductCardInfo}>
        <p>
          {product.description ? `${product.description.split(' ').slice(0, 35).join(' ')}...` : null}
        </p>
      </div>
    </div>
  );
};

// ProductCard.propTypes = {
//   product: PropTypes.objectOf.isRequired
// };

export default ProductCard;
