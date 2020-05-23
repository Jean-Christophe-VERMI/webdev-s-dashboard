import { connect } from 'react-redux';

import VerifEmail from '../../components/VerifEmail';

import { sendToken, modifyField, clearError, clearValidation } from '../../actions/user';

const mapStateToProps = (state) => ({
  secretToken: state.verifEmail.secretToken,
  errorMessageVerifEmail: state.verifEmail.errorMessageVerifEmail,
  hasError: state.verifEmail.hasError,
  validationEmail: state.verifEmail.validationEmail,
  validationMessageVerifEmail: state.verifEmail.validationMessageVerifEmail,
});

const mapDispatchToProps = (dispatch) => ({
  sendToken: (value, name) => {
    dispatch(sendToken(value, name));
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifEmail);