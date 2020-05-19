import React from 'react';

// Components
import Nav from '../Nav';
import Footer from '../Footer';

// Styles
import MainStyled from './MainStyled';


const Main = ({ children }) => (
  <MainStyled>
    <div className="content">
      <Nav />
      {children}
    </div>
    <Footer />
  </MainStyled>
);

export default Main;