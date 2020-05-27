import { connect } from 'react-redux';

import ProjectDashboard from '../../components/ProjectDashboard';

// import { sendAuthInfos, modifyField } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.main.isLogged,
  userHasNoProject: state.dashboard.userHasNoProject,
  userId: state.main.userId,
});

const mapDispatchToProps = (dispatch) => ({
  
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDashboard);