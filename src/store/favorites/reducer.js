/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-fallthrough */
/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */
import {
  ADD_PRODUCT_TO_FAVORITE,
  DELETE_PRODUCT_FROM_FAVORITE,
  FAVORITES_FROM_LOCAL_STORAGE,
} from './types';

const initialState = {
  favorites: [],
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAVORITE:
      const { favoriteProduct } = action.payload;
      return {
        ...state,
        favorites: [...state.favorites, favoriteProduct],
      };
    case DELETE_PRODUCT_FROM_FAVORITE:
      const newFavorites = state.favorites.filter(
        (item) => item._id !== action.payload.favoriteProduct._id
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    case FAVORITES_FROM_LOCAL_STORAGE: {
      console.log(action.payload);
      return {
        ...state,
        favorites: action.payload,
      };
    }
    default:
      return state;
  }
};