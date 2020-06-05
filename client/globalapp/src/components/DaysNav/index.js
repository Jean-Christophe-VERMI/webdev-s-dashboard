import React from 'react';
// import Loading from '../Loading';
import Day from '../../containers/Day';
import DaysNavStyled from './DaysNavStyled';

const DaysNav = ({ 
  data, 
}) => {

  return (
    
      <DaysNavStyled>
        <div className="header-section-days">
          <button>Ajouter un jour</button>
        </div>
        <div className="jours">
          {data.map((day) => (
            <Day className="oneProject" key={day.id} {...day} />
          ))}
        </div>
      </DaysNavStyled>
    
  );
};

export default DaysNav;
