import Search from './search';
import {connect} from 'react-redux';
import {fetchSearch} from '../../actions/search_actions';

const mapStateToProps = state => {
  let searchItems = [];
  if (state.search.items && state.search.items.length) {
    searchItems = state.search.items;
  }
  return ({
    searchItems: searchItems
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: data => dispatch(fetchSearch(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
