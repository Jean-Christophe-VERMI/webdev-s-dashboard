import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import LoginStyled from './LoginStyled';

const Login = ({
  userId,
  email,
  password,
  onChange,
  sendAuthInfos,
  hasError,
  errorMessageLogin,
  validationAuth,
  validationMessageLogin,
  isLogged,
  clearError,
  clearValidation,
}) => {
  
  const history = useHistory();

  function routeChange() {
    let path = `/user/${userId}/dashboard`;
    history.push(path);
  };
 
  if (isLogged) {
    setTimeout(() => {
      routeChange();
    }, 5000);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    sendAuthInfos();
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };

  if(errorMessageLogin) {
    setTimeout(() => {
      clearError();
    }, 8000);
  }
  
  if(validationAuth) {
    setTimeout(() => {
      clearValidation();
    }, 5000);
  }
  

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
            type="password"
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
              <div className="errorMsg">{errorMessageLogin}</div>
            )}
            {validationAuth && (
              <div className="validationMsg">
                <p>{validationMessageLogin}</p>
              </div>
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
  //userId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sendAuthInfos: PropTypes.func.isRequired,
  validationAuth: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  errorMessageLogin: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  validationMessageLogin: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
  clearValidation: PropTypes.func.isRequired,
};

Login.defaultProps = {
  value: '',
  type: 'text',
};

export default Login;
