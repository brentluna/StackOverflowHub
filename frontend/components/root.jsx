import React from 'react';
import SearchContainer from './search/search_container';
import {Provider} from 'react-redux';
const Root = ({store}) => {

  return (
    <Provider store={store}>
      <SearchContainer />
    </Provider>
  );
};

export default Root;
