import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App'
import * as serviceWorker from './serviceWorker';
// Call the Redux Dependencies
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

// 4. Create a list of reducers
import rootReducer from './Reducers'

// Create the variable that binds the middleware with the createStore 
const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  /* Pass the store to the Provider */
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
