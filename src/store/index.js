import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer } from './reducers/ProductsReducer';
import { categoriesReducer } from './reducers/categoriesReducer';



const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));