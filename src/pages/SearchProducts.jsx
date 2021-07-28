import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';
// import getSearchProducts from '../api/getSearchProducts';
import { getSearchProductsAction } from '../store/products/actions';

const SearchProducts = () => {
    const products = useSelector((state) => state.productsPage.products);
    console.log(products);
    const dispatch = useDispatch();
    const handleSearch = () => {
        dispatch(getSearchProductsAction());
    };
    return (
      <>
        <button type="button" onClick={handleSearch}>Search</button>
        <div>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </>
    );
};

export default SearchProducts;