import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Theme from '../Theme';
import Main from '../Main';
import HomePage from '../HomePage';

// Containers

// Styles
import AppStyled from './AppStyled';
// import logo from './logo.png';

const App = () => (

  <Theme>
    <AppStyled>
      <Router>
        <Main>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Main>
      </Router>
    </AppStyled>
  </Theme>
  /*
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  </div>
  */

);

export default App;
