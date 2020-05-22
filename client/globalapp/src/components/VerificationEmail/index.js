import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import VerificationEmailStyled from './VerificationEmailStyled';

const VerificationEmail = ({
  secretToken,
  onChange,
  sendToken,
  hasError,
  errorMessage,
  validationMessage,
  validationEmail,
}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    sendToken();
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };


  return (
  <VerificationEmailStyled>
    <div className="formulaire">
        <div className="headerForm">
          <h1 className="site-name">WEBDEV's DASHBOARD</h1>
        </div>
        <h3 className="formTitle">Verification email</h3>
        <form className="fieldForm" onSubmit={handleSubmit}>
          <TextField 
            name="username"
            onChange={handleChange}
            value={secretToken}
            required
            id="secretToken" 
            label="secretToken" 
            variant="filled" 
          />
          <div className="msgState">
            {hasError && !validationEmail && (
              <p className="errorMsg">{errorMessage}</p>
            )}
            {validationEmail && (
              <p className="validationMsg">{validationMessage}</p>
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
    </VerificationEmailStyled>
  );
};

VerificationEmail.propTypes = {
  secretToken: PropTypes.string.isRequired,
  sendToken: PropTypes.func.isRequired,
  validationEmail: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  validationMessage: PropTypes.string.isRequired,
};

VerificationEmail.defaultProps = {
  value: '',
  type: 'text',
};

export default VerificationEmail;
