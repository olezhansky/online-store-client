import getSearchProducts from '../../api/getSearchProducts';
import { GET_FILTERED_PRODUCTS, SET_SEARCH_PRODUCTS } from './types';

export const getSearchProductsAction = (value) => (dispatch) => {
  getSearchProducts(value).then((data) => {
    console.log('allProducts', data);
    dispatch({
      type: SET_SEARCH_PRODUCTS,
      payload: data,
    });
  });
};

export const getFilteredSearchProductsAction = (brand) => ({
  type: GET_FILTERED_PRODUCTS,
  payload: { brand },
});
