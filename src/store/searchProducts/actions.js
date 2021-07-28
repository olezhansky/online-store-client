import getSearchProducts from '../../api/getSearchProducts';
import { SET_SEARCH_PRODUCTS } from './types';

export const getSearchProductsAction = (value) => (dispatch) => {
    getSearchProducts(value).then((data) => {
      console.log('allProducts', data);
      dispatch({
        type: SET_SEARCH_PRODUCTS,
        payload: data,
      });
    });
  };