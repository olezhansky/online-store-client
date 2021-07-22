import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './SimilarProducts.module.scss';
import SimilarProductsSlider from './SimilarProductsSlider';

const SimilarProducts = () => {
  const viewedProducts = useSelector((state) => state.viewedProducts.viewedProducts);
  return (
    <div className={styles.SimilarProductsSlider}>
      <div className="container">
        <h2 className={styles.Title}>Просмотренные товары</h2>
        {viewedProducts.length <= 4 ? (
          <ul className={styles.Products}>
            {viewedProducts.map((viewedProduct) => (
              <ProductCard product={viewedProduct} />
            ))}
          </ul>
        ) : <SimilarProductsSlider viewedProducts={viewedProducts} />}
      </div>
    </div>
  );
};

export default SimilarProducts;
