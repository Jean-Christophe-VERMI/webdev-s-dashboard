import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Theme from '../Theme';
// import Main from '../Main';
import HomePage from '../HomePage';

// import Login from '../Login';
// import VerifEmail  from '../VerifEmail';
// import Inscription from '../Inscription';
// import ProjectDashboard from '../ProjectDashboard';

// Containers
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

const App = ({ fetchAllProjects, isLogged, allprojects, currentProject }) => {
  
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
              <Route exact path='/user/:userId/dashboard' component={ProjectDashboard} />
              <Route exact path='/user/:userId/projets' component={ProjectList} />
              <Route exact path='/user/:userId/projets/nouveau-projet' component={NewProject} />
              <Route exact path='/projets/:projetTitle' component={ProjectDetails} />
              <Route exact path='/projets/:projetTitle/editer' component={ProjectDetails} />
            </Switch>
          </Main>
        </Router>
      </AppStyled>
    </Theme>
  );
};

export default App;
