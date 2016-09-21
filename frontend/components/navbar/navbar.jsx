import React from 'react';
import {ajaxAuth} from '../../util/api_util';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    ajaxAuth(res => console.log(res));
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
