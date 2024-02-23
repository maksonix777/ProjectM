import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';


export const ROOT_URL = 'https://telran-backend.onrender.com'
// export const ROOT_URL = 'http://localhost:3333'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <PersistGate  persistor={persistor}>
      <BrowserRouter > 
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>
 
  
 
);


