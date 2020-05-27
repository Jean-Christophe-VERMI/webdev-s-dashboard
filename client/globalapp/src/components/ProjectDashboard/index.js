import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
// Components 
// import SearchProjectBar from '../SearchProjectBar';


// Containers
// import SearchProject from '../../containers/UserDashboard';

import ProjectDashboardStyled from './ProjectDashbardStyled';

const ProjectDashboard = (isLogged, userHasNoProject, userId) => {
  
  const id = userId;

  return (
  
    <ProjectDashboardStyled>
      {userHasNoProject && (
        <div className="noProject">
          <p>Ici sur votre Dashboard vous pouvez retrouver des statistiques sur l'ensemble de vos projets.</p>
          <p>Vous pouvez également rechercher des jours spécifiques à l'ensemble de vos projets gâce à la recherche par Tags.</p>
          <p>Enfin vous trouverez un accès rapide à vos 3 derniers projets terminés.</p>
          <p>N'attendez plus, commencez par créer votre premier projet !</p>
        </div>
      )}
      <div className="dashboard-infos">
        <section className="stats-projets">
          <h4 className="stats-title">Statistiques Projets</h4>
          <p>Composant StatsProjects</p>
        </section>
        <section className="tag-search">
          <h4 className="tag-title">Recherche par Tags</h4>
          <p>Composant TagSearchDay</p>
        </section>
      </div>
      <div className="projects-finish">
        <section className="last-finish-project">
          <h4 className="finish-project-tittle">Mes 3 derniers projets terminés</h4>
          <p>Composant FinishProjects</p>
        </section>
      </div>
    </ProjectDashboardStyled>
    
  );
};

export default ProjectDashboard;
