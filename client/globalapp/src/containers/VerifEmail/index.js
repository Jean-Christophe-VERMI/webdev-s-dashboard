import { connect } from 'react-redux';

import VerifEmail from '../../components/VerifEmail';

import { sendToken, modifyField } from '../../actions/user';

const mapStateToProps = (state) => ({
  secretToken: state.verifEmail.secretToken,
  errorMessage: state.verifEmail.errorMessage,
  hasError: state.verifEmail.hasError,
  validationEmail: state.verifEmail.validationEmail,
  validationMessage: state.verifEmail.validationMessage,
});

const mapDispatchToProps = (dispatch) => ({
  sendToken: (value, name) => {
    dispatch(sendToken(value, name));
  },
  onChange: (value, name) => {
    dispatch(modifyField(value, name));
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifEmail);