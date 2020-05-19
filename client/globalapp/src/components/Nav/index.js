import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import NavStyled from './NavStyled';
import logo from './logo.png';

const Nav = () => (

  <NavStyled>
    
      <div className="logoNav">
        <NavLink to='/'>
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
      </div>

      <div className="buttonNav">
        
          <Button className="button" variant="contained" color="primary">
            <NavLink className="navlink" to='/connexion'>
              Connexion
            </NavLink>
          </Button>
        
          <Button className="button" variant="contained" color="primary">
            <NavLink className="navlink" to='/inscription'>
              Inscription
            </NavLink>
          </Button>

      </div>

      
  </NavStyled>
);

export default Nav;
