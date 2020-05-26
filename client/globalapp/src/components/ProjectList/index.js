import React, {useEffect} from 'react';
// Components 
// import Project from '../Project';


// Containers
// import Project from '../../containers/Project';

import ProjectListStyled from './ProjectListStyled';

const ProjectList = ( allProjects, errorMessageProject, hasError) => {

  console.log(errorMessageProject);
  console.log(allProjects);
  return (
    <ProjectListStyled>
      <div>OneProject</div>
    </ProjectListStyled>
    
  );
};

export default ProjectList;