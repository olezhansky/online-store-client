/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import { SHOW_GRID } from '../products/types';
import {
  GET_FILTERED_PRODUCTS,
  SET_SEARCH_PRODUCTS,
  PAGINATE_PAGE_NUMBER,
  SET_SEARCH_PRODUCTS_PER_PAGE,
  CLEAR_SEARCH_PRODUCTS,
  SORT_SEARCH_PRODUCTS,
} from './types';

const initialState = {
  searchProducts: [],
  isLoadingSearchProducts: true,
  currentPage: 1,
  searchProductsPerPage: 6,
  showBy: 3,
  showGrid: true,
};

export const searchProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: action.payload.data,
        isLoadingSearchProducts: false,
        currentPage: 1,
        searchProductsPerPage: 6,
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
    case PAGINATE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload.pageNumber,
      };
    case SET_SEARCH_PRODUCTS_PER_PAGE:
      return {
        ...state,
        searchProductsPerPage: action.payload.showBy,
      };
    case CLEAR_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: [],
      };
    case SHOW_GRID:
      return {
        ...state,
        showGrid: !state.showGrid,
      };
    case SORT_SEARCH_PRODUCTS:
      console.log(action.payload.value);
      let newArr = [];
      if (action.payload.value === '-currentPrice') {
        newArr = state.searchProducts.slice(0).sort((a, b) => parseFloat(b.currentPrice) - parseFloat(a.currentPrice));
      } else if (action.payload.value === '+currentPrice') {
        newArr = state.searchProducts.slice(0).sort((a, b) => parseFloat(a.currentPrice) - parseFloat(b.currentPrice));
      } else {
        newArr = state.searchProducts.slice(0).sort(() => Math.random() - 0.5);
      }
      return {
        ...state,
        searchProducts: newArr,
      };
    default:
      return state;
  }
};
