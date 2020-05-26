import React from 'react';

// Components
import Nav from '../Nav';
import Footer from '../Footer';
import SearchProjectBar from '../SearchProjectBar';

// Containers
import UserDashboard from '../../containers/UserDashboard';
//import SearchProjectBar from '../../containers/SearchProjectBar';
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
      {isLogged && (
        <SearchProjectBar />
      )}
      {children}
    </div>
    <Footer />
  </MainStyled>
);

export default Main;