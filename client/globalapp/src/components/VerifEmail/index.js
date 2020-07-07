import React, { useEffect, useState } from 'react';
import axios from 'axios';

import VerifEmailStyled from './VerifEmailStyled';

const VerifEmail = () => {

  const [succesStatut, setSuccesStatut] = useState(null);
  const [errorStatut, setErrorStatut] = useState(null);
  useEffect(() => {
    const verifEmail = async () => {
      try {
        const clientUrl = window.location.href;
      
        const response = await axios({
          method: 'post',
          url: 'http://localhost:4000/verification-email',
          data: {
            clientURL: clientUrl,
          }
        })
        const succesStatut = await response.data.msg;
        setSuccesStatut(succesStatut);
    
      } catch (error) {
        if (error.response) {
          const errorStatus = error.response.data.error;
          setErrorStatut(errorStatus);
        }
      }
    };
    verifEmail();
  }, []);

  return (
  <VerifEmailStyled>
    <div className="formulaire">
        <div className="headerForm">
          <h1 className="site-name">WEBDEV's DASHBOARD</h1>
        </div>
        <h3 className="formTitle">Verification email</h3> 
          <div className="msgState">
              <div className="validationMsg">{succesStatut}</div>
              <div className="errorMsg">{errorStatut}</div>
          </div>
      </div>
    </VerifEmailStyled>
  );
};

export default VerifEmail;
