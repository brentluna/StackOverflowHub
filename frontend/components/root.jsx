import React from 'react';
import SearchContainer from './search/search_container';
import {Provider} from 'react-redux';
const Root = ({store}) => {

  return (
    <Provider store={store}>
      <div className='popout'>
        <h1 className='title'>StackOverflow Hub</h1>
        <SearchContainer />
      </div>
    </Provider>
  );
};

export default Root;
