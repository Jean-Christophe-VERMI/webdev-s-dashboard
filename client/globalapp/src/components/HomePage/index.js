import React from 'react';
import { NavLink } from 'react-router-dom';

//composants 
import CookieConsent from "react-cookie-consent";


// Style
import HomePageStyled from './HomePageStyled';
import wifi from './wifi.png';


const HomePage = () => (

    <HomePageStyled>

      <div className="header">
        <h1 className="title-home">WEBDEV's DASHBOARD</h1>
      </div>

      <section className="content">

        <div className="left-content">
          <div className="arrow_box1">
            <p>Retrouvez rapidement des informations utiles</p>
          </div>
          <div className="arrow_box1">
            <p>Suivez l'évolution de vos projets</p>
          </div>
        </div>

        <div className="right-content">
          <div className="arrow_box2">
            <p>Ajoutez des notes, du code et des références</p>
          </div>
          <div className="arrow_box2">
            <p>Constituez votre historique d'activité</p>
          </div>
        </div>

      </section>

      <div className="div-icon">
      <img src={wifi} className="logo-wifi" alt="logo wifi" />
      </div>

      <CookieConsent 
        buttonText="J'accepte"
        style={{ background: "rgba(43, 55, 59, 0.8)" }}
        buttonStyle={{ background: "#4c96d7", color: "#ffffff", fontSize: "14px" }} 
      >
        <div className="rgpd">
          Nous utilisons les cookies afin de fournir les services et fonctionnalités proposés sur notre site et pour améliorer l’expérience de nos utilisateurs. En cliquant sur "J’accepte", vous acceptez l’utilisation des cookies. Nous utilisons des cookies pour nous permettre de mieux comprendre comment le site est utilisé. En continuant à utiliser ce site, vous acceptez notre <NavLink className="rgpd-link" to='/mentions-legales'>politique des cookies</NavLink>.
        </div>        
      </CookieConsent>

    </HomePageStyled>
    
);


export default HomePage;
