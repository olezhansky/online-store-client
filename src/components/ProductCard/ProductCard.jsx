import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import styles from './ProductCard.module.scss';
import products from './products';

const ProductCard = () => (
  <Link to="/single-product">
    {/* {products.map(() => ( */}
    <div className={styles.ProductCard}>
      <img
        className={styles.ProductImg}
        src="https://files.foxtrot.com.ua/PhotoNew/img_0_117_3047_0_Small.webp"
        alt=""
      />
      <h2 className={styles.ProductName}>
        NIKON Z 7 + 24-70 f4 + FTZ Adapter Kit
        {products.name}
      </h2>
      <div className={styles.ProductBlock}>
        <div className={styles.ProductData}>
          <span className={styles.ProductPrice}>
            103 615 ГРН
            {products.price}
          </span>
          <span className={styles.ProductStatus}>
            в наличии
            {products.status}
          </span>
        </div>
        <div>
          <span>
            <BiCart className={styles.ProductIcon} />
          </span>
        </div>
      </div>
    </div>
    {/* ))} */}
  </Link>
);

export default ProductCard;
