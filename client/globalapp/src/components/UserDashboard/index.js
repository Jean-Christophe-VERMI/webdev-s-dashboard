import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import UserDashboardStyled from './UserDashboardStyled';
import logo from './logo.png';

const UserDashboard = ({
  userId,
}) => {

  const id = userId;
  return (
    <UserDashboardStyled>
      
        <div className="logoNav">
          <NavLink to='/'>
            <img src={logo} className="logo" alt="logo" />
          </NavLink>
        </div>

        <div className="buttonNav">
          
            <Button className="button" variant="contained" color="primary">
              <NavLink className="navlink" to={`/user/${id}/dashboard`}>
                Dashboard
              </NavLink>
            </Button>
          
            <Button className="button" variant="contained" color="primary">
              <NavLink className="navlink" to='/inscription'>
                Inscription
              </NavLink>
            </Button>

        </div>

    </UserDashboardStyled>
  );
};

export default UserDashboard;