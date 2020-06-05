import React from 'react';
import Button from '@material-ui/core/Button';
import InfosProjectStyled from './InfosProject';

const InfosProject = ({ 
  data,
  editorProject, 
}) => {

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
              Editer le projet
            </Button>
          </div>
        </div>
      </section>
    </InfosProjectStyled>
  );
};

export default InfosProject;
