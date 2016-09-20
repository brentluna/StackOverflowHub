import React from 'react';
import SearchItem from './search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.updateSearch = this.updateSearch.bind(this);
    this.searchResults = this.searchResults.bind(this);
  }


  updateSearch(e) {
    console.log(e.target.value);
    this.setState({search: e.target.value}, () => {
      if (this.state.search.length > 3) {
        this.props.fetchSearch(this.state.search);
      }
    });
  }

  searchResults() {
    let lis = [];
    this.props.searchItems.forEach((item, idx) => {
      lis.push(
        <SearchItem link={item.link} title={item.title} score={item.score} key={idx}/>
      );
    });
    return lis;
  }


  render() {
    return (
      <div className='search-div'>
        <input type='text' className='search-input' onChange={this.updateSearch} placeholder='SEARCH' />
        <ul>
          {this.searchResults()}
        </ul>
      </div>
    );
  }
}

export default Search;
