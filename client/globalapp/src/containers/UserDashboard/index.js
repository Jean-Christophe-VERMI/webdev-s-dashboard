import { connect } from 'react-redux';

import UserDashboard from '../../components/UserDashboard';

import { logout } from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.auth.username,
  userId: state.auth.userId,
  logout: state.auth.logout,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);