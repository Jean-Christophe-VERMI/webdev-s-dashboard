import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DashboardIcon from '@material-ui/icons/Dashboard';


import UserDashboardStyled from './UserDashboardStyled';
import logo from './logo.png';

const UserDashboard = ({
  username,
  userId,
  logout,
}) => {

  const handleLogout = () => {
    logout();
  };

  const id = userId;
  return (
    <UserDashboardStyled>
      
        <div className="headerNav">
            <img src={logo} className="logo" alt="logo" />
            <h2>WEBDEV's DASHBOARD</h2>
        </div>
        <div className="user-links">
          <Switch>
            <NavLink className="username-link" to="/">
              {username}
            </NavLink>
          </Switch>

          <Switch>
          <NavLink className="logout-link" to="/" onClick={handleLogout}>
            Déconnexion
          </NavLink>
          </Switch>

          
        </div>
        
        <div className="buttonNav">
          <Button className="button" variant="contained" color="primary">
            <DashboardIcon />
            <NavLink className="navlink" to={`/user/${id}/dashboard`}>
              Dashboard
            </NavLink>
          </Button>
          <Button className="button" variant="contained" color="primary">
            <ControlPointIcon />
            <NavLink className="navlink" to={`/user/${id}/projets/nouveau-projet`}>
              Nouveau projet
            </NavLink>
          </Button>
        </div>
        <div className="favori-project">
          <p>FAVORI PROJET</p>
        </div>

    </UserDashboardStyled>
  );
};

export default UserDashboard;