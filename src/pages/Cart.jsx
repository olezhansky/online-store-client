import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import CartContainer from '../containers/CartContainer/CartContainer';
import SimilarProductsSlider from '../containers/SimilarProductsSlider/SimilarProductsSlider';

const Cart = () => {
  const array = [['/', 'Главная'], ['cart', 'Моя корзина']];
  return (
    <>
      <Breadcrumbs data={array} />
      <CartContainer />
      <SimilarProductsSlider />
    </>
  );
};

export default Cart;
