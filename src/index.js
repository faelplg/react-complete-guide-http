import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'BEARER shableyson';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  (request) => {
    console.log('intercepting request', request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log('request error', error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log('intercepting response', response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log('response error', error);
    return Promise.reject(error);
  },
);

// Remove interceptor. Add it to a variable myInterceptor and:
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
