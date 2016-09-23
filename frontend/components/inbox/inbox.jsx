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
        let read = 'inbox-li read';
        if (el.is_unread) {
          read = 'inbox-li unread';
        }
        lis.push(
          <a href={el.link} target='_blank'>
            <li className={read} >
              {el.title}
            </li>
          </a>
        );
      });
      return lis;
    }
  }
  render() {

    return(
      <ul className='inbox-ul'>
      {this.messageLi()}
      </ul>
    );
  }
}

export default Inbox;
