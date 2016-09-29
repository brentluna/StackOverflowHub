import {InboxConstants, receiveInbox} from '../actions/inbox_actions';

const InboxReducer = (state = {}, action) => {
  switch (action.type) {
    case InboxConstants.RECEIVE_INBOX:
      return Object.assign({}, action.inbox);
    default:
      return state;
  }
};

export default InboxReducer;
