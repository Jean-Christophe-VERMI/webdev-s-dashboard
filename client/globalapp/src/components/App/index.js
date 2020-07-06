import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Theme from '../Theme';
import HomePage from '../HomePage';
import Page404 from '../Page404';

// Containers
import ProtectedRoute from '../../containers/ProtectedRoute';
import Inscription from '../../containers/Inscription';
import VerifEmail from '../../containers/VerifEmail';
import Login from '../../containers/Login';
import Main from '../../containers/Main';
import ProjectDashboard from '../../containers/ProjectDashboard';
import ProjectList from '../../containers/ProjectList';
import NewProject from '../../containers/NewProject';
import ProjectDetails from '../../containers/ProjectDetails';

// Styles
import AppStyled from './AppStyled';

const App = ({ isLogged }) => {

  return (
    <Theme>
      <AppStyled>
        <Router>
          <Main>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/connexion' component={Login} />
              <Route exact path='/inscription' component={Inscription} />
              <Route exact path='/verification-email' component={VerifEmail} />
              <ProtectedRoute exact path='/user/:userId/dashboard' component={ProjectDashboard} />
              <ProtectedRoute exact path='/user/:userId/projets' component={ProjectList} />
              <ProtectedRoute exact path='/user/projets/nouveau-projet' component={NewProject} />
              <ProtectedRoute exact path='/projets/:projetTitle' component={ProjectDetails} />
              <ProtectedRoute exact path='/projets/:projetTitle/editer-projet' component={ProjectDetails} />
              <ProtectedRoute exact path='/projets/:projetTitle/editer-jour/:dayId' component={ProjectDetails} />
              <Route path="*" component={Page404} />
            </Switch>
          </Main>
        </Router>
      </AppStyled>
    </Theme>
  );
};

export default App;
