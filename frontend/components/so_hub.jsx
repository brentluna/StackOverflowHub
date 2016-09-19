import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

import {fetchSearch} from '../util/api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.fetchSearch = fetchSearch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root />, rootEl);

});
