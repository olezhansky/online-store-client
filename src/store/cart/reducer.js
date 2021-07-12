// /* eslint-disable no-underscore-dangle */
// /* eslint-disable no-case-declarations */
// import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from './types';

// const initialState = [];

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PRODUCT_TO_CART:
//       return [...state, action.payload];
//     case DELETE_PRODUCT_FROM_CART:
//       const newCart = state.filter((product) => product._id !== action.payload);
//       return newCart;
//     default:
//       return state;
//   }
// };

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from './types';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return [...state, action.payload];
    case DELETE_PRODUCT_FROM_CART:
      const newCart = state.filter((product) => product._id !== action.payload);
      return newCart;
    default:
      return state;
  }
};
