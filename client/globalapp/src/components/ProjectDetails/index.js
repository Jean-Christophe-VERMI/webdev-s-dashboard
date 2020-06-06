import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';

import InfosProject from '../../containers/InfosProject';
import DaysNav from '../../containers/DaysNav';

import Editor from '../../containers/Editor';

import ProjectDetailsStyled from './ProjectDetailsStyled';

const ProjectDetails = ({
  validationEditProject,
  currentProjectTitle,
  currentProjectId,
}) => {

  const [projet, setProjet] = useState(null);
  const [days, setDays] = useState(null);

  useEffect(() => {
    async function getProject() {
      try {
        const projetId = currentProjectId;
        const projetTitle = currentProjectTitle;
        const response = await axios.get(`http://localhost:4000/projets/${projetId}/${projetTitle}`);
        const project = await response.data;
        setProjet(project);
        setDays(project.days);
    
      } catch (error) {
        console.log(error);
      }
    };
    getProject();

  }, []);

  

  console.log(projet);
  
  return (
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
          {!days && (
            <Loading />
          )}
          {days && (
            <DaysNav data={days} />
          )}
        </section>
      </div>
    </ProjectDetailsStyled>  
  );
};

export default ProjectDetails;
