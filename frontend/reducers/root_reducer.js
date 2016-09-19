import SearchReducer from './search_reducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  search: SearchReducer
});

export default RootReducer;
