/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import getAllFilteredProducts from '../../api/getAllFilteredProducts';
import getFilteredProducts from '../../api/getFilteredProducts';
import getSearchProducts from '../../api/getSearchProducts';
// import getProducts from '../../api/getProducts';
import {
  SET_CURRENT_CAREGORY,
  SET_CURRENT_PAGE,
  SET_CURRENT_PRODUCTS_ARR,
  SET_CURRENT_QUERY,
  SET_FLAG_IN_CART,
  SET_PER_PAGE,
  SET_PRODUCTS,
  SET_SORT_BY,
  SHOW_GRID,
  SET_SEARCH_PRODUCTS,
} from './types';

// eslint-disable-next-line operator-linebreak
export const getFilteredProductsAction =
  (currentCategory, page, perPage, addQuery) => (dispatch) => {
    // console.log('CURRCATEGORY', currentCategory);
    // console.log('PAGE', page);
    // console.log('QUERY', addQuery);
    getFilteredProducts(currentCategory, page, perPage, addQuery).then(
      (result) => {
        console.log('getFilteredProducts', result);
        dispatch({ type: SET_PRODUCTS, payload: result.data.products });
      }
    );

    // getProducts().then((data) => {
    //   dispatch({ type: SET_PRODUCTS, payload: data });
    // });
  };
// eslint-disable-next-line operator-linebreak
export const getAllProductsCurrentCategoryAction =
  (currentCategory) => (dispatch) => {
    getAllFilteredProducts(currentCategory).then((allProducts) => {
      // console.log('allProducts', allProducts);
      dispatch({
        type: SET_CURRENT_PRODUCTS_ARR,
        payload: allProducts.data.products,
      });
    });
  };
export const getSearchProductsAction = (value) => (dispatch) => {
  getSearchProducts(value).then((data) => {
    console.log('allProducts', data);
    dispatch({
      type: SET_SEARCH_PRODUCTS,
      payload: data,
    });
  });
};

export const setFlagInCartAction = (product) => ({
  type: SET_FLAG_IN_CART,
  payload: { product },
});
export const setCurrentPageAction = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
export const setCurrentPerPageAction = (page) => ({
  type: SET_PER_PAGE,
  payload: page,
});
export const setCurrentCategoryAction = (id) => ({
  type: SET_CURRENT_CAREGORY,
  payload: id,
});
export const setCurrentQueryAction = (id, page) => ({
  type: SET_CURRENT_QUERY,
  payload: `category=${id}&perPage=6&startPage=${page}`,
});
export const setSortQueryAction = (querySort) => ({
  type: SET_SORT_BY,
  payload: querySort,
});

export const showGridAction = () => ({
  type: SHOW_GRID,
});
