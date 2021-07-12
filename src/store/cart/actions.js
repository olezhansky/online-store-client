import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from './types';

export const addProductToCartAction = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const deleteProductFromCartAction = (productId) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: productId,
});
