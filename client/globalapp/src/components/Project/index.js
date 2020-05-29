import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { getUrlByProjectTitle } from '../../selectors/index';

import ProjectStyled from './ProjectStyled';

const Project = ({ title, description, id, catégorie_type, created_at, dispatchCurrentProject }) => {

  const date = created_at;
  const dateFormat = date.slice(0, 10);
  console.log(date.slice(0, 10));
  
  return (
    <ProjectStyled>
      <div className='content'>
        <div className="header-content">
          <Link
            className='title'
            onClick={() => {
              dispatchCurrentProject(id);
            }}
            to={getUrlByProjectTitle(title)}
          >
            {title}
          </Link>
        </div>
        <div className="description">
          {description}
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
