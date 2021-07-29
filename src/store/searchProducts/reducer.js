/* eslint-disable no-case-declarations */
import { GET_FILTERED_PRODUCTS, SET_SEARCH_PRODUCTS } from './types';

const initialState = {
  searchProducts: [],
  isLoadingSearchProducts: true
};

export const searchProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: action.payload.data,
        searchProducts2: action.payload.data,
        isLoadingSearchProducts: false
      };
    case GET_FILTERED_PRODUCTS:
      console.log(action.payload.brand);
      let newArr1 = '';

      newArr1 = state.searchProducts.filter(
        (item) => item.brand === action.payload.brand
      );
      return {
        ...state,
        searchProducts: newArr1,
      };
    default:
      return state;
  }
};
