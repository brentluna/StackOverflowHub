import {applyMiddleware} from 'redux';
import SearchMiddleware from './search_middleware';
import InboxMiddleware from './inbox_middleware';

const RootMiddleware = applyMiddleware(
  SearchMiddleware,
  InboxMiddleware
);

export default RootMiddleware;
