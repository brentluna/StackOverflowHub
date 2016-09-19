import {SearchConstants} from '../actions/search_actions';

const defaultState = {};

const SearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SearchConstants.RECEIVE_SEARCH:
    const newState = Object.assign({}, action.data);
    return newState;


    default:
      return state;
  }
};


export default SearchReducer;
