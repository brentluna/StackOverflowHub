import {connect} from 'react-redux';
import Inbox from './inbox';

const mapStateToProps = state => ({
  inbox: state.inbox
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
