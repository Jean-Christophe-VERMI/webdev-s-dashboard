import React from 'react';
import { Link } from 'react-router-dom';

import FooterStyled from './FooterStyled';

const Footer = () => {
  return (
    <FooterStyled>
      <div className='footer'>
        <div className='mentions'>

          <Link to='/termes'>Mentions Légales</Link>
        </div>
        <div className='termes'>
          <Link to='/mentions-legales'>
            <p>Termes et conditions</p>
          </Link>
        </div>
        <div className='contact'>
          <Link to='/contact'>
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;