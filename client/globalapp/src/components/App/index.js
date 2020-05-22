import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Theme from '../Theme';
import Main from '../Main';
import HomePage from '../HomePage';
// import Login from '../Login';
// import VerifEmail  from '../VerifEmail';
// import Inscription from '../Inscription';

// Containers
import Inscription from '../../containers/Inscription';
import VerifEmail from '../../containers/VerifEmail';
import Login from '../../containers/Login';


// Styles
import AppStyled from './AppStyled';

const App = () => (

  <Theme>
    <AppStyled>
      <Router>
        <Main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/connexion' component={Login} />
            <Route exact path='/inscription' component={Inscription} />
            <Route exact pash='/verification-email' component={VerifEmail} />
          </Switch>
        </Main>
      </Router>
    </AppStyled>
  </Theme>

);

export default App;
