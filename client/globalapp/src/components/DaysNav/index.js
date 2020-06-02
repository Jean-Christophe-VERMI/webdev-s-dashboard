import React from 'react';

import Day from '../../containers/Day';
import DaysNavStyled from './DaysNavStyled';

const DaysNav = ({ allprojects, currentProject }) => {

  const projet = allprojects.find((project) => project.id === currentProject);
  console.log(projet);

  return (
    <DaysNavStyled>
      <div className="header-section-days">
        <button>Ajouter un jour</button>
      </div>
      <div className="jours">
        {projet.days.map((day) => (
          <Day className="oneProject" key={day.id} {...day} />
        ))}
      </div>
    </DaysNavStyled>
  );
};

export default DaysNav;
