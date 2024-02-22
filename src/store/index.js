import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import { productsReducer } from './reducers/ProductsReducer';
import { categoriesReducer } from './reducers/categoriesReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { basketReducer } from './reducers/basketReducer';
import { useSelector } from 'react-redux';




/* States */
const persistingConfig = {
  key: 'localStorage',
  storage,
  whitelist: ['basket'],
  // blacklist: ['_persist']
  
}
const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  basket: basketReducer
  
});
const persistedReducer = persistReducer(persistingConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk)); 
export const persistor = persistStore(store);