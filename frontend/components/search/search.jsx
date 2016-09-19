import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-div'>
        <input type='text' className='search-input' />
      </div>
    );
  }
}

export default Search;
