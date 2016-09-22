import React from 'react';
import {ajaxAuth} from '../../util/api_util';
import $ from 'jquery';
let access_token;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   let url = `https://stackexchange.com/oauth/dialog?response_type=token&client_id=7915&redirect_uri=https://stackexchange.com/oauth/login_success&scope=read_inbox`;
  //   let popup = window.open('', 'oauth', 'height=460, width=1180');
  //   debugger
  //   popup.location = url;
  //   console.log(window.location.hash.substr(1));
  //   $(() => {
  //     debugger
  //     if (window.opener !== null && !window.opener.closed) {
  //       debugger
  //       opener.location.hash = window.location.hash;
  //       window.close();
  //     } else {
  //       $(window).on('hashchange', () => {
  //         debugger
  //         if (window.location.hash !== '') {
  //           let str = window.loation.hash.substr(1);
  //           let query = str.split('&');
  //           let param;
  //           let accessToken;
  //           for (let i = 0; i < query.length ; i++) {
  //             param = query[i].split('=');
  //             if (param[0] === 'access_token') {
  //               accessToken = param[1];
  //               break;
  //             }
  //           }
  //           if (accessToken !== undefined) {
  //             console.log(accessToken);
  //           }
  //         }
  //       });
  //     }
  //   });
  // }

  // handleClick() {
  //   const CLIENT_ID = '7915';
  //   const CLIENT_SECRET = 'hve)9Mwh6TyGgfI6DUqAzg((';
  //   const CALLBACK_URL = chrome.identity.getRedirectURL();
  //   const AUTH_URL =      `https://stackexchange.com/oauth/dialog?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}&scope=read_inbox`;
  //   console.log(CALLBACK_URL);
  //   chrome.identity.launchWebAuthFlow(
  //     {
  //       url: AUTH_URL,
  //       interactive: true,
  //     },
  //     (redirectURL) => {
  //       debugger
  //       const regex = /\?code=(.+)/;
  //       const authCode = redirectURL.match(regex)[1];
  //       $.ajax({
  //         url: `https://stackexchange.com/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${authCode}`,
  //         type: 'POST',
  //         success(response) {
  //           const regexAuth = /access_token=(\w+|\d+)&/;
  //           const accessCode = response.match(regexAuth)[1];
  //           chrome.storage.sync.set({ ggAccessCode: `${accessCode}` }, () => {
  //           });
  //         },
  //       });
  //     });
  // }


  handleClick() {
    const url = new URL("https://stackexchange.com/oauth/dialog");
    url.searchParams.set('client_id', '7915');
    url.searchParams.set('scope', 'read_inbox');
    url.searchParams.set('redirect_uri', chrome.identity.getRedirectURL());

    chrome.identity.launchWebAuthFlow(
      {
        url: url.href,
        interactive: true
      },
      response => {
        console.log(response);
        debugger
        const regexAuth = /access_token=(.+)&/;
        const accessCode = response.match(regexAuth)[1];
        console.log(accessCode);
        chrome.storage.sync.set({ ggAccessCode: `${accessCode}` }, () => {});
        const responseUrl = new URL(response);
        access_token = responseUrl.searchParams.get('access_token');
        console.log(access_token);
      }
    );
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default Navbar;
