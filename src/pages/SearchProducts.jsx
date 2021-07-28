import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import SearchProductsContainer from '../containers/SearchProductsContainer/SearchProductsContainer';
import Stories from '../containers/Stories/Stories';

const SearchProducts = () => {
  const array = [['/', 'Главная'], ['products', 'Цифровая техника']];
  return (
    <>
      <Breadcrumbs data={array} />
      <SearchProductsContainer />
      <Stories />
    </>
  );
};

export default SearchProducts;