import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

// Components 
// import Project from '../Project';
import Loading from '../Loading';

// Containers
import Project from '../../containers/Project/';
import NoProject from '../../containers/NoProject';

import ProjectListStyled from './ProjectListStyled';

const ProjectList = (
  allprojects,  
) => {

  const [AllprojetsByUser, setProjet] = useState(null);

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const projets = await allprojects.allprojects;
        console.log(projets);
        setProjet(projets);

      } catch (error) {
        console.log(error);
      }
    };
    getAllProjects();

  }, []);

  return (
    <ProjectListStyled>
      <div className="header-projectList">
        <Button className="button" variant="contained" color="primary">
          <NavLink className="navlink" to={`/user/projets/nouveau-projet`}>
            Nouveau projet
          </NavLink>
          <ControlPointIcon />
        </Button>
        <h1>MES PROJETS</h1>
      </div>
      <div className="projectBar">
        <NoProject className="noProject" />
      </div>
      {!AllprojetsByUser && (
          <Loading />
        )}
      {AllprojetsByUser && (
        <div className='projets'>
          {AllprojetsByUser.map((project) => (
            <Project className="oneProject" key={project.id} {...project} />
          ))}
        </div>
      )}
    </ProjectListStyled>
    
  );
};

export default ProjectList;