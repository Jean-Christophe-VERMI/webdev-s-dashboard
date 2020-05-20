import { connect } from 'react-redux';

import Inscription from '../../components/Inscription';

import { sendUser, modifyField, verifyCallback } from '../../actions/user';

const mapStateToProps = (state) => ({
  username: state.registration.username,
  email: state.registration.email,
  password: state.registration.password,
  passwordConfirm: state.registration.passwordConfirm,
  errorMessage: state.registration.errorMessage,
  hasError: state.registration.hasError,
  validationSignup: state.registration.validationSignup,
  validationMessage: state.registration.validationMessage,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Inscription);
