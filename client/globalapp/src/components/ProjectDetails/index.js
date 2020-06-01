import React from 'react';
import Button from '@material-ui/core/Button';

import Day from '../../containers/Day';

import ProjectDetailsStyled from './ProjectDetailsStyled';
import { dispatchCurrentProject } from '../../actions/project';

const ProjectDetails = ({ allprojects, currentProject, editorProject }) => {

  const projet = allprojects.find((project) => project.id === currentProject);
  const jours = projet.days;
  const id = currentProject;

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
              <div className="technos">
                <div className="techno">Techno 1</div>
                <div className="techno">Techno 2</div>
                <div className="techno">Techno 3</div>
              </div>
            </div>
            <section className="bottom-infos-project">
              <div className="description">
                {projet.description}
              </div>
              <div className="cat-edit">
                <div className="cat-etat">
                  {projet.catégorie_état}
                </div>
                <div className="editer-btn">
                  <Button className="button" variant="contained" color="primary"
                  onClick={() => {
                    dispatchCurrentProject(id);
                    editorProject();
                  }}
                  >
                    Editer le projet
                  </Button>
                </div>
              </div>
            </section>
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
