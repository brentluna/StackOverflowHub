import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from '../store/store';

import {fetchSearch} from '../util/api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.fetchSearch = fetchSearch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);

});
