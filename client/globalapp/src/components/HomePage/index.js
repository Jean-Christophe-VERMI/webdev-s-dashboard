import React from 'react';

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
  </HomePageStyled>
  
);

export default HomePage;
