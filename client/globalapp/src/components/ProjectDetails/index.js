import React, { Suspense } from 'react';

import InfosProject from '../../containers/InfosProject';
import DaysNav from '../../containers/DaysNav';
import Editor from '../../containers/Editor';

import ProjectDetailsStyled from './ProjectDetailsStyled';

const ProjectDetails = ({
  validationEditProject,
  validationMessageEditProject,
 }) => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectDetailsStyled>   
        <div className="content">
          <section className="section-project">
            <div className="project-infos">
            <InfosProject />
            </div>
            <div className="editor-section">
            {validationEditProject && (
              <div className="validationMsg">
                <p>{validationMessageEditProject}</p>
              </div>
            )}
              <Editor />
            </div>
          </section>
          <section className="section-days">
            <DaysNav />
          </section>
        </div>
      </ProjectDetailsStyled>  
    </Suspense>
  );
};

export default ProjectDetails;
