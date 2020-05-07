import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App = () => (

  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page d'accueil qui réunit l'ensemble des projets développés.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir les projets
        </a>
      </header>
  </div>

)

export default App;
