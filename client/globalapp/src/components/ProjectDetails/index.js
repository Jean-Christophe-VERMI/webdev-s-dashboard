import React from 'react';

import ProjectDetailsStyled from './ProjectDetailsStyled';

const ProjectDetails = ({ allprojects, currentProject }) => {
  
  const projet = allprojects.find((project) => project.id === currentProject);
  console.log(projet);
  
  return (
    <ProjectDetailsStyled>
      <section className="project-block">
      
      </section>
    </ProjectDetailsStyled>
    
  );
};

export default ProjectDetails;
