import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

// Components 
// import Project from '../Project';

// Containers
import Project from '../../containers/Project/';

import ProjectListStyled from './ProjectListStyled';

const ProjectList = (
  allprojects, 
  errorMessageProject, 
  userHasNoProject, 
  userId 
 ) => {

  const projets = allprojects.allprojects;
  console.log(projets);
  const id = userId;

  return (
    <ProjectListStyled>
      <div className="header-projectList">
        <Button className="button" variant="contained" color="primary">
          <NavLink className="navlink" to={`/user/${id}/projets/nouveau-projet`}>
            Nouveau projet
          </NavLink>
          <ControlPointIcon />
        </Button>
        <h1>MES PROJETS</h1>
      </div>
      {userHasNoProject && (
        <div className="noProject">
          <p>{errorMessageProject}</p>
        </div>
      )}
      <div className='projets'>
        {projets.map((project) => (
          <Project className="oneProject" key={project.id} {...project} />
        ))}
      </div>
    </ProjectListStyled>
    
  );
};

export default ProjectList;