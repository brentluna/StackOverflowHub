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
        let dateInt = parseInt(`${el.creation_date}000`)
        let date = new Date(dateInt)
        date = date.toDateString()
        lis.push(
          <a href={el.link} target='_blank'>
            <li className={read} >
              {el.title}
              <br/>
              <br/>
              {date}
            </li>
          <hr className='search-hr'/>
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
