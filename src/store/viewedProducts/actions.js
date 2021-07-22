import { ADD_VIEWED_PRODUCT } from './types';

export const addViewedProductAction = (viewedProduct) => ({
  type: ADD_VIEWED_PRODUCT,
  payload: { viewedProduct },
});
