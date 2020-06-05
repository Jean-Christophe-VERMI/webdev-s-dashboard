import React, { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';

// import InfosProject from '../../containers/InfosProject';
// import DaysNav from '../../containers/DaysNav';

import Editor from '../../containers/Editor';

import ProjectDetailsStyled from './ProjectDetailsStyled';

const ProjectDetails = ({
  currentProjectTitle,
  currentProjectId,
}) => {

  const InfosProject = React.lazy(() => import('../../containers/InfosProject'));

  const [projet, setProjet] = useState(null);

  useEffect(() => {
    async function getProject() {
      try {
        const projetId = currentProjectId;
        const projetTitle = currentProjectTitle;
        const response = await axios.get(`http://localhost:4000/projets/${projetId}/${projetTitle}`);
        const project = await response.data;
        setProjet(project);
    
      } catch (error) {
        console.log(error);
      }
    };
    getProject();
  }, []);

  // const DaysNav = React.lazy(() => import('../../containers/DaysNav'));
  console.log(projet);
  
  return (
    <Suspense fallback={<Loading />}>
      <ProjectDetailsStyled>   
        <div className="content">
          <section className="section-project">
              <div className="project-infos">
              {!projet && (
                <Loading />
              )}
              {projet && (
                <InfosProject data={projet} />
              )}
              </div>
            <div className="editor-section">
              <Editor />
            </div>
          </section>
          <section className="section-days">
          </section>
        </div>
      </ProjectDetailsStyled>  
    </Suspense>
  );
};

export default ProjectDetails;
