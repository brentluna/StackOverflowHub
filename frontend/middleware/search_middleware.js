import {SearchConstants, receiveSearch} from '../actions/search_actions';
import {fetchSearch} from '../util/api_util';

const SearchMiddleware = store => action => next => {
  switch (action.type) {
    case SearchConstants.FETCH_SEARCH:
      const success = res => console.log(res);
      fetchSearch(action.data, success);
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
