import {connect} from 'react-redux';
import Navbar  from './navbar';
import {fetchInbox} from '../../actions/inbox_actions';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchInbox: token => dispatch(fetchInbox(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
