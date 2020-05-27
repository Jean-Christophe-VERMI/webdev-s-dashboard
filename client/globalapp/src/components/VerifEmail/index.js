import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import VerifEmailStyled from './VerifEmailStyled';

const VerifEmail = ({
  secretToken,
  onChange,
  sendToken,
  hasErrorVerifEmail,
  errorMessageVerifEmail,
  validationEmail,
  validationMessageVerifEmail,
  clearError,
  clearValidation,
}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    sendToken();
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };

  if(errorMessageVerifEmail) {
    setTimeout(() => {
      clearError();
    }, 8000);
  }

  if(validationEmail) {
    setTimeout(() => {
      clearValidation();
    }, 8000);
  }


  return (
  <VerifEmailStyled>
    <div className="formulaire">
        <div className="headerForm">
          <h1 className="site-name">WEBDEV's DASHBOARD</h1>
        </div>
        <h3 className="formTitle">Verification email</h3>
        <form className="fieldForm" onSubmit={handleSubmit}>
          <TextField 
            name="secretToken"
            onChange={handleChange}
            value={secretToken}
            required
            id="secretToken" 
            label="code de validation" 
            variant="filled" 
          />
          <div className="msgState">
            {hasErrorVerifEmail && !validationEmail && (
              <div className="errorMsg">{errorMessageVerifEmail}</div>
            )}
            {validationEmail && (
              <div className="validationMsg">{validationMessageVerifEmail}</div>
            )}
          </div>
          <Button 
            className="submit-btn" 
            variant="contained" 
            color="primary"
            type="submit"
          >
          Valider
          </Button>
        </form>
      </div>
    </VerifEmailStyled>
  );
};

VerifEmail.propTypes = {
  secretToken: PropTypes.string.isRequired,
  sendToken: PropTypes.func.isRequired,
  validationEmail: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasErrorVerifEmail: PropTypes.bool.isRequired,
  errorMessageVerifEmail: PropTypes.string.isRequired,
  validationMessageVerifEmail: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
  clearValidation: PropTypes.func.isRequired,
};

VerifEmail.defaultProps = {
  value: '',
  type: 'text',
};

export default VerifEmail;
