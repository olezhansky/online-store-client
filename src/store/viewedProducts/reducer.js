/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import { ADD_VIEWED_PRODUCT } from './types';

const initialState = {
  viewedProducts: [],
};

export const viewedProducts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIEWED_PRODUCT:
      return {
        ...state,
        viewedProducts: [...state.viewedProducts, action.payload.viewedProduct],
      };

    default:
      return state;
  }
};
