import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { getUrlByProjectTitle } from '../../selectors/index';

import ProjectStyled from './ProjectStyled';

const Project = ({ title, description, id, catégorie_type, date, dispatchCurrentProject }) => {

  console.log(date);
  
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
          <p>{description}</p>
        </div>
        <div className="footer-content">
          <p className="categorie">{catégorie_type}</p>
          <p>Crée le : {date}</p> 
        </div>
      </div>
    </ProjectStyled>
  );
};

export default Project;
