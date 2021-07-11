/* eslint-disable operator-linebreak */
import thunk from 'redux-thunk';
// eslint-disable-next-line object-curly-newline
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { productsReducer } from './products/reducer';
import { popularModelsReducer } from './popularModels/reducer';
import { modals } from './madals/reducer';
import { admin } from './admin/reducer';

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const rootReducer = combineReducers({
  productsPage: productsReducer,
  popularModelsPage: popularModelsReducer,
  modals,
  admin,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
