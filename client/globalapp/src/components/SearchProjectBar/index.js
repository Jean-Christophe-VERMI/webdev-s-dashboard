import React from 'react';

// Composants 
// import AllProjects from '../AllProjects';
// import FiltredProjects from '../FiltredProjects';

// Containers
import AllProjects from '../../containers/AllProjects';
// import FiltredProjects from '../../containers/FiltredProjects';

import SearchProjectBarStyled from './SearchProjectBarStyled';


const SearchProjectBar = ({fetchAllProjects}) => (

  <SearchProjectBarStyled>
    <AllProjects />
    <div>*FiltredProjects</div>
  </SearchProjectBarStyled>
  
);

export default SearchProjectBar;
