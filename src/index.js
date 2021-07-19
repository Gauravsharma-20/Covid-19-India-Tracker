import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from './storage/reducers';
import App from './App';

import './App.css';


const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render( 
  <Provider store={store}>
    <App/>
  </Provider>
, document.querySelector('#root'));
