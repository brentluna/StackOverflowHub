import {SearchConstants, receiveSearch} from '../actions/search_actions';
import {fetchSearch} from '../util/api_util';

const SearchMiddleware = store => next => action => {
  switch (action.type) {
    case SearchConstants.FETCH_SEARCH:
      const success = res => store.dispatch(receiveSearch(res));
      fetchSearch(action.data, success);
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
