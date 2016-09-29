export const InboxConstants = {
  FETCH_INBOX: 'FETCH_INBOX',
  RECEIVE_INBOX: 'RECEIVE_INBOX'
};

export const fetchInbox = token => ({
  type: InboxConstants.FETCH_INBOX,
  token
});

export const receiveInbox = inbox => ({
  type: InboxConstants.RECEIVE_INBOX,
  inbox
});
