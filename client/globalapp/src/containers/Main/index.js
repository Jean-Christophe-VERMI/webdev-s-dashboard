import { connect } from 'react-redux';

import Main from '../../components/Main';

// import { sendAuthInfos, modifyField } from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.main.username,
  userId: state.main.userId,
  isLogged: state.main.isLogged,
  notLogged: state.main.notLogged,
});

const mapDispatchToProps = (dispatch) => ({
  
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);