import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr';
import { Link } from 'react-router-dom';

import { getUrlByProjectTitle } from '../../selectors/index';

import Techno from '../../containers/Techno';

import ProjectStyled from './ProjectStyled';

const Project = ({ 
  title, 
  description, 
  id, 
  catégorie_type, 
  date, 
  dispatchCurrentProjectId,
  dispatchCurrentProjectTitle,
  technos
}) => {
  
  const dateFormat = Moment(date).locale('fr').format("dddd, Do MMMM YYYY");

  return (
    <ProjectStyled>
      <div className='content'>
        <div className="header-content">
          <Link
            className='title'
            onClick={() => {
              dispatchCurrentProjectId(id);
              dispatchCurrentProjectTitle(title);
            }}
            to={getUrlByProjectTitle(title)}
          >
            {title}
          </Link>
          <div className="technos" >
            {technos.map((techno) => (
              <Techno key={techno.id} {...techno} />
            ))}
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="footer-content">
          <p className="categorie">{catégorie_type}</p>
          <p>Crée le : {dateFormat}</p> 
        </div>
      </div>
    </ProjectStyled>
  );
};

export default Project;
