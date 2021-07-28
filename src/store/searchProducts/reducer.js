import { SET_SEARCH_PRODUCTS } from './types';

const initialState = {
    searchProducts: []
};

export const searchProducts = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_PRODUCTS:
            return {
                ...state,
                searchProducts: action.payload.data
            };
        default:
            return state;
    }
};
