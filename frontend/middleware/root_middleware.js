import {applyMiddleware} from 'redux';
import SearchMiddleware from './search_middleware';


const RootMiddleware = applyMiddleware(
  SearchMiddleware
);

export default RootMiddleware;
