import React from 'react';
import { Link } from 'react-router-dom';

import FooterStyled from './FooterStyled';

const Footer = () => {
  return (
    <FooterStyled>
      <div className='footer'>
        <Link className="footer-link" to='/mentions-legales'><p>Termes et conditions</p></Link>
        <Link className="footer-link" to='/contact'><p>Contact</p></Link>
      </div>
    </FooterStyled>
  );
};

export default Footer;