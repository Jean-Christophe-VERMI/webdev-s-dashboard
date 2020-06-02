import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { getUrlByProjectTitleEditer } from '../../selectors/index';
import InfosProjectStyled from './InfosProject';

const InfosProject = ({ 
  allprojects,
  currentProject,
  editorProject, 
  dispatchCurrentProject,
}) => {

  const projet = allprojects.find((project) => project.id === currentProject);
  console.log(projet);
  const id = currentProject;
  return (
    <InfosProjectStyled>
      <section className="header-project-infos">
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
      </section>
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
            }}><NavLink className="navlink" to={getUrlByProjectTitleEditer(projet.title)}>
              Editer le projet
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </InfosProjectStyled>
  
  );
};

export default InfosProject;
