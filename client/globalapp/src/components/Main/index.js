import React from 'react';

// Components
import Nav from '../Nav';
import Footer from '../Footer';

// Styles
import MainStyled from './MainStyled';


const Main = ({ children }) => (
  <MainStyled>
    <Nav />
    <Footer />
    {children}
  </MainStyled>
);

export default Main;