import React, { useEffect, useState } from 'react';
import axios from 'axios';

import InfosProject from '../../containers/InfosProject';
import DaysNav from '../../containers/DaysNav';
import Editor from '../../containers/Editor';

import ProjectDetailsStyled from './ProjectDetailsStyled';

const ProjectDetails = ({
  allprojects, 
  currentProject, 
  // dispatchDaysOfProject,
  dispatchOneProject,
  userId
}) => {

  console.log(allprojects);
  return (
      <ProjectDetailsStyled>   
        <div className="content">
          <section className="section-project">
            <div className="project-infos">
            <InfosProject lesprojets={allprojects} />
            </div>
            <div className="editor-section">
              <Editor />
            </div>
          </section>
          <section className="section-days">
            <DaysNav lesprojets={allprojects} />
          </section>
        </div>
      </ProjectDetailsStyled>  
  );
};

export default ProjectDetails;
