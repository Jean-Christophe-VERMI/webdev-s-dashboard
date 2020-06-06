import React from 'react';
import Day from '../../containers/Day';
import DaysNavStyled from './DaysNavStyled';

const DaysNav = ({ 
  data, 
  addNewDay,
  validationPostDay,
  validationMessagePostDay,
  clearValidationDay,
}) => {

  const sendDayAndRefresh = () => {
    addNewDay();
    setTimeout(() => {
      window.location.reload(false)
    }, 2000);
  }

  if(validationPostDay) {
    setTimeout(() => {
      clearValidationDay();
    }, 3000);
  }

  return (
    <DaysNavStyled>
      <div className="header-section-days">
        <button onClick={sendDayAndRefresh}>Ajouter un jour</button>
      </div>
      {validationPostDay && (
        <div className="validationMsg">
          <p>{validationMessagePostDay}</p>
        </div>
      )}
      <div className="jours">
        {data.map((day) => (
          <Day className="oneProject" key={day.id} {...day} />
        ))}
      </div>
    </DaysNavStyled>
  );
};

export default DaysNav;
