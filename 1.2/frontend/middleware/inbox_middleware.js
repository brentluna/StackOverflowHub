import {InboxConstants, receiveInbox} from '../actions/inbox_actions';
import {fetchInbox} from '../util/api_util';

const InboxMiddleware = store => next => action  => {
  switch(action.type) {
    case InboxConstants.FETCH_INBOX:
      const success = data => store.dispatch(receiveInbox(data));
      fetchInbox(action.token, success);
      return next(action);
    default:
      return next(action);
  }
};

export default InboxMiddleware;
