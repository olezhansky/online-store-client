import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import CartContainer from '../containers/CartContainer/CartContainer';
import SimilarProducts from '../containers/SimilarProducts/SimilarProducts';

const Cart = () => {
  const array = [['/', 'Главная'], ['cart', 'Моя корзина']];
  return (
    <>
      <Breadcrumbs data={array} />
      <CartContainer />
      <SimilarProducts />
    </>
  );
};

export default Cart;
