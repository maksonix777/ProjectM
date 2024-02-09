import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer } from './reducers/ProductsReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import SingleProduct from '../components/SingleProduct';
import { basketReducer } from './reducers/basketReducer';


/* States */

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  basket: basketReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));