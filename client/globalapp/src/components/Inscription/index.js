import React from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
// import ReCAPTCHA from "react-google-recaptcha";

import PropTypes from 'prop-types';

import InscriptionStyled from './InscriptionStyled';

const Inscription = ({
  username,
  email,
  password,
  passwordConfirm,
  onChange,
  sendUser,
  hasError,
  errorMessage,
  validationMessage,
  validationSignup,
}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    sendUser();
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };

  return (
    <InscriptionStyled>
    <div className="formulaire">
        <div className="headerForm">
          <h1 className="site-name">WEBDEV's DASHBOARD</h1>
        </div>
        <h3 className="formTitle">Formulaire d'inscription</h3>
        <form className="fieldForm" onSubmit={handleSubmit}>
          <TextField 
            name="username"
            onChange={handleChange}
            value={username}
            required
            id="field-username" 
            label="Nom d'utilisateur" 
            variant="filled" 
          />
          <TextField 
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
          id="field-email" 
          label="Email" 
          variant="filled" 
          />
          <TextField 
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
            id="field-password" 
            label="Mot de passe" 
            variant="filled" 
          />
          <TextField 
            type="password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
            id="field-passwordConfirm" 
            label="Confirmation mot de passe" 
            variant="filled" 
          />

            <p className="terms">
              <Checkbox
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                required
                color="primary"
              />J'accepte les <Link className="footer-link" to='/mentions-legales'>termes et conditions</Link> du site webdev's dashbord.
            </p>
            <div className="msgState">
              {hasError && !validationSignup && (
                <p className="errorMsg">{errorMessage}</p>
              )}
              {validationSignup && (
                <p className="validationMsg">{validationMessage}</p>
              )}
            </div>
            <Button 
              className="submit-btn" 
              variant="contained" 
              color="primary"
              type="submit"
            >
              Enregistrer
            </Button>
        </form>
    </div>
    </InscriptionStyled>
    
  );

};

Inscription.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  sendUser: PropTypes.func.isRequired,
  validationSignup: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  validationMessage: PropTypes.string.isRequired,
};

Inscription.defaultProps = {
  value: '',
  type: 'text',
};

export default Inscription;