import React from 'react';

// Components
import Nav from '../Nav';
import Footer from '../Footer';

// Containers
import UserDashboard from '../../containers/UserDashboard';

// Styles
import MainStyled from './MainStyled';


const Main = ({ children, isLogged, notLogged }) => (
  <MainStyled>
    <div className="content">
      {notLogged && (
        <Nav />
      )}
      {isLogged && (
        <UserDashboard />
      )}
      {children}
    </div>
    <Footer />
  </MainStyled>
);

export default Main;