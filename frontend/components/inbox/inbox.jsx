import React from 'react';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.messageLi = this.messageLi.bind(this);
  }


  messageLi() {
    if (Object.keys(this.props.inbox).length) {
      let lis = [];
      this.props.inbox.items.forEach(el => {
        lis.push(
          <li>{el.title}</li>
        );
      });
      return lis;
    }
  }
  render() {

    return(
      <ul>
      {this.messageLi()}
      </ul>
    );
  }
}

export default Inbox;
