import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import InscriptionStyled from './InscriptionStyled';

const Inscription = () => {

  return (
    <InscriptionStyled>
    <h1 className="site-name">WEBDEV's DASHBOARD</h1>
    <div className="formulaire">
      <div className="headerForm">
        <h3 className="formTitle">Formulaire d'inscription</h3>
      </div>
      <div className="fieldForm">
        <FormControl>
          <InputLabel htmlFor="my-input">Nom d'utilisateur</InputLabel>
          <Input id="username" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input id="email" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Mot de passe</InputLabel>
          <Input id="password" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Confirmation mot de passe</InputLabel>
          <Input id="confirmPassword" aria-describedby="my-helper-text" />
        </FormControl>
      </div>
      <Button className="button" variant="contained" color="primary">
        Enregistrer
      </Button>
    </div>
    </InscriptionStyled>
    
  );

};

export default Inscription;