import React from 'react';
import {fetchInbox} from '../../util/api_util';
import InboxContainer from '../inbox/inbox_container';

let accessCode;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.inbox = this.inbox.bind(this);
    this.state = {showInbox: false}
    this.oAuth = this.oAuth.bind(this);
    this.showInbox = this.showInbox.bind(this);
  }


  oAuth() {
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
        accessCode = response.match(regexAuth)[1];
        console.log(accessCode);
        chrome.storage.sync.set({ ggAccessCode: `${accessCode}` }, () => {
          this.inbox(); 
        });
      }
    );
  }

  handleClick() {
    let newState = !this.state.showInbox;
    this.setState({showInbox: newState}, () => {
      this.oAuth();
    })
  }

  showInbox() {
    if (this.state.showInbox) {
      return (
        <InboxContainer />
      )
    }
  }

  inbox() {
    let that = this;
    chrome.storage.sync.get('ggAccessCode', items => {
      let userCode = items.ggAccessCode;
      that.props.fetchInbox(userCode);
    });
  }

  render() {
    return(
      <div>
        <div className='header-div'>
          <i className="material-icons" onClick={this.handleClick}>email</i>
          <h1 className='title'>StackOverflow Hub</h1>
        </div>
        {this.showInbox()}
      </div>
    );
  }
}

export default Navbar;
