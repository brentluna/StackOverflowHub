import SearchReducer from './search_reducer';
import {combineReducers} from 'redux';
import InboxReducer from './inbox_reducer';


const RootReducer = combineReducers({
  search: SearchReducer,
  inbox: InboxReducer
});

export default RootReducer;
