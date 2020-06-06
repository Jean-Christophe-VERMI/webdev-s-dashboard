import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { getUrlByProjectTitleEditer } from '../../selectors/index';

import InfosProjectStyled from './InfosProject';

const InfosProject = ({ 
  data,
  editorProject, 
  currentProjectTitle,
  validationEditProject,
  validationMessageEditProject,
  clearValidationProject,
}) => {

  /*
  if(validationEditProject === true ) {
    setTimeout(() => {
      clearValidationProject();
    }, 8000);
  };
  */

  return (
    <InfosProjectStyled>
      <section className="header-project-infos">
        <div className="infos-title-type">
          <div className="title">
            {data.title}
          </div>
          <div className="cat-type">
            {data.catégorie_type}
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
          {data.description}
        </div>
        <div className="cat-edit">
          <div className="cat-etat">
            {data.catégorie_état}
          </div>
          <div className="editer-btn">
            <Button className="button" variant="contained" color="primary"
            onClick={() => {
              editorProject();
            }}>
              <Link to={getUrlByProjectTitleEditer(currentProjectTitle)} >
                Editer le projet
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {validationEditProject && (
        <div className="validationMsg">{validationMessageEditProject}</div>
      )}
    </InfosProjectStyled>
  );
};

export default InfosProject;
