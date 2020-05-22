import { connect } from 'react-redux';

import Login from '../../components/Login';

import { sendAuthInfos, modifyField } from '../../actions/user';

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  email: state.auth.email,
  password: state.auth.password,
  hasError: state.auth.hasError,
  errorMessage: state.auth.errorMessage,
  validationAuth: state.auth.validationAuth,
  validationMessage: state.auth.validationMessage,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  sendAuthInfos: (value, name) => {
    dispatch(sendAuthInfos(value, name));
  },
  onChange: (value, name) => {
    dispatch(modifyField(value, name));
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);