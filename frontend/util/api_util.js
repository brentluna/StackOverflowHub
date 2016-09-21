import 'whatwg-fetch';
import $ from 'jquery';

const CLIENT_ID = '7915';


export const fetchSearch = (data,success) => {
  fetch(`https://api.stackexchange.com/2.2/search?site=stackoverflow&intitle=${data}`)
  .then(res => res.json())
  .then(success)
  .catch(() => console.log('searchError'));
};


export const fetchAuth = (success) => {
  fetch(`https://stackexchange.com/oauth/dialog?response_type=token&client_id=${CLIENT_ID}&redirect_uri=http://localhost&scope=read_inbox`,
  {method: 'POST'})
  .then(res => res.json())
  .then(success)
  .catch(e => console.log('authError' + e));
};

export const ajaxAuth = (success) => {
  $.ajax({
    method: 'post',
    url: `https://stackexchange.com/oauth/dialog?response_type=token&client_id=${CLIENT_ID}&redirect_uri=http://localhost&scope=read_inbox`,
    success,
    error: () => console.log('errorAjax')
  });
};
