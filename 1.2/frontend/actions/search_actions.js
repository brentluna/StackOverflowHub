export const SearchConstants = {
  FETCH_SEARCH: 'FETCH_SEARCH',
  RECEIVE_SEARCH: 'RECEIVE_SEARCH'
};

export const fetchSearch = (data) => ({
  type: SearchConstants.FETCH_SEARCH,
  data
});

export const receiveSearch = (data) => ({
  type: SearchConstants.RECEIVE_SEARCH,
  data
});
