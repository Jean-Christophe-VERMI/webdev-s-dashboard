import { connect } from 'react-redux';

import Inscription from '../../components/Inscription';

import { sendUser, modifyField, verifyCallback, clearError, clearValidation } from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.registration.username,
  email: state.registration.email,
  password: state.registration.password,
  passwordConfirm: state.registration.passwordConfirm,
  errorMessageRegister: state.registration.errorMessageRegister,
  hasError: state.registration.hasError,
  validationSignup: state.registration.validationSignup,
  validationMessageRegister: state.registration.validationMessageRegister,
  isVerified: state.registration.isVerified,
});

const mapDispatchToProps = (dispatch) => ({
  sendUser: (value, name) => {
    dispatch(sendUser(value, name));
  },
  onChange: (value, name) => {
    dispatch(modifyField(value, name));
  },
  verifyCallback: (response) => {
    dispatch(verifyCallback(response));
  },
  clearError: () => {
    dispatch(clearError());
  },
  clearValidation: () => {
    dispatch(clearValidation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Inscription);
