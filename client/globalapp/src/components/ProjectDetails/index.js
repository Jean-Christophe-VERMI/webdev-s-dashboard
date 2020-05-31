import React from 'react';


import Day from '../../containers/Day';

import ProjectDetailsStyled from './ProjectDetailsStyled';

const ProjectDetails = ({ allprojects, currentProject, }) => {

  const projet = allprojects.find((project) => project.id === currentProject);
  // console.log(projet);
  
  // const technos = projet.technos;
  // console.log(technos);

  const jours = projet.days;
  // console.log(jours);

    return (

      <ProjectDetailsStyled>
        <div className="content">
          <section className="section-project">
            <div className="project-infos">
              <div className="header-project-infos">
                <div className="infos-title-type">
                  <div className="title">
                    {projet.title}
                  </div>
                  <div className="cat-type">
                    {projet.catégorie_type}
                  </div>
                </div>
                  
                <div className="cat-edit">
                  <div className="editer-btn">
                    Editer le projet
                  </div>
                <div className="cat-etat">
                  {projet.catégorie_état}
                </div>
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
            </div>
          </section>
          <section className="section-days">
            <div className="header-section-days">
              <button>Ajouter un jour</button>
            </div>
            <div className="jours">
              {jours.map((day) => (
                <Day className="oneProject" key={day.id} {...day} />
              ))}
            </div>
          </section>
        </div>

      </ProjectDetailsStyled>
        
    );
};

export default ProjectDetails;
