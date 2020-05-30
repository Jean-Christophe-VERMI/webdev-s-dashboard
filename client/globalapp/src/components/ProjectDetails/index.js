import React from 'react';


import Day from '../../containers/Day';

import ProjectDetailsStyled from './ProjectDetailsStyled';

const ProjectDetails = ({ allprojects, currentProject, }) => {

  const projet = allprojects.find((project) => project.id === currentProject);
  console.log(projet);
  
  const technos = projet.technos;
  console.log(technos);

  const jours = projet.days;
  console.log(jours);

    return (

      <ProjectDetailsStyled>
        <div className="projet-section">
          <section className="project-infos">
            <div className="header-project-infos">
              <div className="title">
                {projet.title}
              </div>
              <div className="cat-type">
              {projet.catégorie_type}
              </div>
            </div>
            <div className="description">
              {projet.description}
            </div>
            <div className="technos">
              <div className="techno">Techno 1</div>
              <div className="techno">Techno 2</div>
              <div className="techno">Techno 3</div>
            </div>
          </section>
          <section className="projet-etat">
            <div className="cat-etat">
              {projet.catégorie_état}
            </div>
            <div className="editer-btn">
              button editer
            </div>
          </section>
        </div>
        

        <div className="title-section-days">
          <h4>Liste des jours associés à ce projet</h4>
        </div>

        <section className="jours">
          {jours.map((day) => (
            <Day className="oneProject" key={day.id} {...day} />
          ))}
        </section>

      </ProjectDetailsStyled>
        
    );
};

export default ProjectDetails;
