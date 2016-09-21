import React from 'react';
import SearchContainer from './search/search_container';
import {Provider} from 'react-redux';
import NavbarContainer from './navbar/navbar_container';

const Root = ({store}) => {

  return (
    <Provider store={store}>
      <div className='popout'>
        <NavbarContainer/>
        <h1 className='title'>StackOverflow Hub</h1>
        <SearchContainer />
      </div>
    </Provider>
  );
};

export default Root;
