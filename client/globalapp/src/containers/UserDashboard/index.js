import { connect } from 'react-redux';

import UserDashboard from '../../components/UserDashboard';

// import { sendAuthInfos, modifyField } from '../../actions/user';

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  
});

const mapDispatchToProps = (dispatch) => ({
  
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);