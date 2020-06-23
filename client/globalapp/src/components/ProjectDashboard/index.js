import React from 'react';
// import { NavLink } from 'react-router-dom';

// import Button from '@material-ui/core/Button';
// Components 
// import SearchProjectBar from '../SearchProjectBar';


// Containers
// import SearchProject from '../../containers/UserDashboard';

import ProjectDashboardStyled from './ProjectDashbardStyled';

const ProjectDashboard = (isLogged, userHasNoProject, userId) => {
  
  // const id = userId;

  return (
  
    <ProjectDashboardStyled>
      
      <div className="infosDashboard">
        <p>Bienvenue sur votre Dashboard, ici vous retrouverez des statistiques sur l'ensemble de vos projets.</p>
        <p>Vous pouvez également rechercher des jours spécifiques à l'ensemble de vos projets grâce à la recherche par Tags.</p>
        <p>Enfin, vous trouverez un accès rapide à vos 3 derniers projets terminés.</p>
      </div>

      <div className="dashboard-infos">
        <section className="stats-projets">
          <div className="stats-title">Statistiques Projets</div>
          <div className="content-stats-project">Composant StatsProjects</div>
        </section>
        <section className="tag-search">
          <div className="tag-title">Recherche par Tags</div>
          <div className="content-tag-search">Composant TagSearchDay</div>
        </section>
      </div>
      <div className="projects-finish">
        <section className="last-finish-project">
          <div className="finish-project-tittle">Mes 3 derniers projets terminés</div>
          <div className="content-finish-project">Composant FinishProjects</div>
        </section>
      </div>
    </ProjectDashboardStyled>
    
  );
};

export default ProjectDashboard;
