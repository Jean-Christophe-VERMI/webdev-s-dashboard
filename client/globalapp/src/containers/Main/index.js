import { connect } from 'react-redux';

import Main from '../../components/Main';

// import { sendAuthInfos, modifyField } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  notLogged: state.auth.notLogged,
});

const mapDispatchToProps = (dispatch) => ({
  
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);