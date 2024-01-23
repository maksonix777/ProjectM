import { createStore, combineReducers } from 'redux'
import { productReducer } from './reducers/ProductsReducer';

const rootReducer = combineReducers({
products: productReducer
});
export const store = createStore(rootReducer)