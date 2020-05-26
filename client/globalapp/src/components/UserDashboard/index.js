import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';

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
          <h2>WEBDEV's DASHBOARD</h2>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="user-links">
          <NavLink className="username-link" to="/">
            {username}
          </NavLink>
          <Tooltip title="Déconnexion" placement="right-start">
            <NavLink className="logout-link" to="/" onClick={handleLogout}>
              <ExitToAppIcon />
            </NavLink>
          </Tooltip>
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