import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';

import UserDashboardStyled from './UserDashboardStyled';
import Logo from './logo2.png';

const UserDashboard = ({
  fetchAllProjects,
  username,
  userId,
  logout,
  clearEditor,
}) => {

  useEffect(() => {
    fetchAllProjects();
  });

  const handleLogout = () => {
    logout();
  };

  const handleEditor = () => {
    clearEditor();
  };

  const id = userId;
  return (
    <UserDashboardStyled>
      
        <div className="headerNav">
          <img src={Logo} className="logo" alt="logo" />
          <h2>WEBDEV's DASHBOARD</h2>
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
          <Button onClick={handleEditor} className="button" variant="contained" color="primary">
            <DashboardIcon />
            <NavLink className="navlink" to={`/user/${id}/dashboard`}>
              Dashboard
            </NavLink>
          </Button>
          <Button onClick={handleEditor} className="button" variant="contained" color="primary">
            <SearchIcon />
            <NavLink className="navlink" to={`/user/${id}/projets`}>
              Projets
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