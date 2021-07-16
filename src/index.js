import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore ,applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import myReducer from './myApp/Reducer/index';


import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  myReducer,
  composeEnhancer(applyMiddleware(thunk))
  
   );

ReactDOM.render(
  
     <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
export default store;
reportWebVitals();
