import React from 'react';

import InfosProject from '../../containers/InfosProject';
import DaysNav from '../../containers/DaysNav';
import Editor from '../../containers/Editor';

import ProjectDetailsStyled from './ProjectDetailsStyled';

const ProjectDetails = () => {

  return (
      <ProjectDetailsStyled>   
        <div className="content">
          <section className="section-project">
            <div className="project-infos">
            <InfosProject />
            </div>
            <div className="editor-section">
              <Editor />
            </div>
          </section>
          <section className="section-days">
            <DaysNav />
          </section>
        </div>
      </ProjectDetailsStyled>  
  );
};

export default ProjectDetails;
