import { connect } from 'react-redux';

import UserDashboard from '../../components/UserDashboard';

import { logout } from '../../actions/user';
import { fetchAllProjects, clearEditor } from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  username: state.main.username,
  userId: state.main.userId,
  logout: state.main.logout,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
  fetchAllProjects: () => {
    dispatch(fetchAllProjects());
  },
  clearEditor: () => {
    dispatch(clearEditor());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);