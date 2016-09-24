import React from 'react';
import SearchItem from './search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.updateSearch = this.updateSearch.bind(this);
    this.arrow = this.arrow.bind(this);
    this.searchResults = this.searchResults.bind(this);
  }


  updateSearch(e) {
    this.setState({search: e.target.value}, () => {
      if (this.state.search.length > 3) {
        this.props.fetchSearch(this.state.search);
      }
    });
  }

  searchResults() {
    let lis = [];
    this.props.searchItems.forEach((item, idx) => {
      let dateInt = parseInt(`${item.creation_date}000`)
    
      const date = new Date(dateInt)

      lis.push(
        <SearchItem link={item.link} title={item.title} date={date.toDateString()} score={item.score} key={idx}/>
      );
    });
    return lis;
  }

  arrow() {
    window.onscroll = () => {
    if ((window.innerHeight = window.scrollY) >= document.body.offsetHeight) {
          alert('bottom')
    }

    }
      }


  render() {
    return (
      <div className='search-div'>
        <input type='text' className='search-input' onChange={this.updateSearch} placeholder='SEARCH' />
        <ul>
          {this.searchResults()}
          {this.arrow()}
        </ul>
      </div>
    );
  }
}

export default Search;
