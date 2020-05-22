import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import LoginStyled from './LoginStyled';

const Login = ({
  email,
  password,
  onChange,
  sendAuthInfos,
  hasError,
  errorMessage,
  validationAuth,
  validationMessage,
}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    sendAuthInfos();
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };


  return (
  <LoginStyled>
    <div className="formulaire">
        <div className="headerForm">
          <h1 className="site-name">WEBDEV's DASHBOARD</h1>
        </div>
        <h3 className="formTitle">Connexion</h3>
        <form className="fieldForm" onSubmit={handleSubmit}>
          <TextField 
            name="email"
            onChange={handleChange}
            value={email}
            required
            id="email" 
            label="email" 
            variant="filled" 
          />
          <TextField 
            name="password"
            onChange={handleChange}
            value={password}
            required
            id="password" 
            label="password" 
            variant="filled" 
          />
          <div className="msgState">
            {hasError && !validationAuth && (
              <div className="errorMsg">{errorMessage}</div>
            )}
            {validationAuth && (
              <div className="validationMsg">{validationMessage}</div>
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
    </LoginStyled>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sendAuthInfos: PropTypes.func.isRequired,
  validationAuth: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  //validationMessage: PropTypes.string.isRequired,
};

Login.defaultProps = {
  value: '',
  type: 'text',
};

export default Login;
