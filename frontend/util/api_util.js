import 'whatwg-fetch';

export const fetchSearch = (data,success) => {
  fetch(`https://api.stackexchange.com/2.2/search?site=stackoverflow&intitle=${data}`)
  .then(res => res.json())
  .then(success)
  .catch(() => console.log('searchError'));
};
