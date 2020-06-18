import React from 'react';

import TechnoStyled from './TechnoStyled';

const Techno = ({name}) => {

  return (
    <TechnoStyled>
      <div>{name}</div>
    </TechnoStyled>
  );
};

export default Techno;
