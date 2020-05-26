import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import AllProjectsStyled from './AllProjectsStyled';

const AllProjects = ({fetchAllProjects, userId}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAllProjects();
  };

  const id = userId;
  return (
    <AllProjectsStyled>
      <Button className="button" variant="contained" color="primary" onClick={handleSubmit}>
        <SearchIcon />
        <NavLink className="navlink" to={`/user/${id}/projets`}>
          Tous les projets
        </NavLink>
      </Button>
    </AllProjectsStyled>
  );

};

export default AllProjects;
