import React from 'react';

// Components 
// import Project from '../Project';

// Containers
import Project from '../../containers/Project/';

import ProjectListStyled from './ProjectListStyled';

const ProjectList = ( allprojects, errorMessageProject, userHasNoProject) => {

  
  console.log(allprojects.allprojects);
  console.log(errorMessageProject);

  const projets = allprojects.allprojects;


  return (
    <ProjectListStyled>
      <h1>MES PROJETS</h1>
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