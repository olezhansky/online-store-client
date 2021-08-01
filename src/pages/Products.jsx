/* eslint-disable no-shadow */
import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProductsContainer from '../containers/ProductsContainer/ProductsContainer';
import Stories from '../containers/Stories/Stories';

const Products = () => {
  const currentCategory = useSelector((state) => state.productsPage.currentCategory);
  let activeBreadcrumbs = '';
  if (currentCategory === 'photocameras') {
    activeBreadcrumbs = 'Фотоаппараты';
  } else if (currentCategory === 'videocameras') {
    activeBreadcrumbs = 'Видеокамеры';
  } else if (currentCategory === 'actioncameras') {
    activeBreadcrumbs = 'Экшнкамеры';
  } else if (currentCategory === 'lenses') {
    activeBreadcrumbs = 'Объективы';
  }
  const array = [['/', 'Главная'], ['products', activeBreadcrumbs]];
  return (
    <>
      <Breadcrumbs data={array} />
      <ProductsContainer />
      <Stories />
    </>
  );
};

export default Products;
