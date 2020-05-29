import React from 'react';

// Components 
// import Project from '../Project';

// Containers
import Project from '../../containers/Project/';

import ProjectListStyled from './ProjectListStyled';

const ProjectList = ( allprojects, errorMessageProject, hasError) => {

  console.log(allprojects.allprojects);

  const projets = allprojects.allprojects;

  return (
    <ProjectListStyled>
      <h1>MES PROJETS</h1>
      <div className='projets'>
        {projets.map((project) => (
          <Project key={project._id} {...project} />
        ))}
      </div>
    </ProjectListStyled>
    
  );
};

export default ProjectList;