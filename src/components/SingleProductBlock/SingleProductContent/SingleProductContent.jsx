/* eslint-disable react/prop-types */
import React from 'react';
import styles from './SingleProductContent.module.scss';

const SingleProductContent = ({singleProduct}) => {
    console.log('test');
    return (
      <div className={styles.Wrapper}>
        <p>{singleProduct.quantity !== 0 && <span>в наличии</span>}</p>
        <p>
          {singleProduct.currentPrice }
          {' '}
          грн
        </p>
      </div>
    );
};

export default SingleProductContent;