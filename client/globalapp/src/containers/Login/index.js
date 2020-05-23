import { connect } from 'react-redux';

import Login from '../../components/Login';

import { sendAuthInfos, modifyField, clearError, clearValidation } from '../../actions/user';

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  email: state.auth.email,
  password: state.auth.password,
  hasError: state.auth.hasError,
  errorMessageLogin: state.auth.errorMessageLogin,
  validationAuth: state.auth.validationAuth,
  validationMessageLogin: state.auth.validationMessageLogin,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  sendAuthInfos: (value, name) => {
    dispatch(sendAuthInfos(value, name));
  },
  onChange: (value, name) => {
    dispatch(modifyField(value, name));
  },
  clearError: () => {
    dispatch(clearError());
  },
  clearValidation: () => {
    dispatch(clearValidation());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);