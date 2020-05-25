import { connect } from 'react-redux';

import UserDashboard from '../../components/UserDashboard';

import { logout } from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.main.username,
  userId: state.main.userId,
  logout: state.main.logout,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);