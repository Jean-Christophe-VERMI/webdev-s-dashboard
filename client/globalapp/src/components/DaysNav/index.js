import React from 'react';

import TextField from '@material-ui/core/TextField';

import Day from '../../containers/Day';

import DaysNavStyled from './DaysNavStyled';

const DaysNav = ({ 
  data, 
  onChange,
  addNewDay,
  validationPostDay,
  validationMessagePostDay,
  clearValidationDay,
}) => {

  if(validationPostDay) {
    setTimeout(() => {
      clearValidationDay();
    }, 3000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewDay();
    setTimeout(() => {
      window.location.reload(false)
    }, 2000);
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };

  return (
    <DaysNavStyled>
      <div className="header-section-days">
        <form className="fieldForm" onSubmit={handleSubmit}>
          <div className="addNewDay">
            <p className="label-day">Selectionnez une date</p>
            <TextField
              id="date"
              format="DD/MM/yyyy"
              name="date"
              type="date"
              onChange={handleChange}
              required
            />
            <button className="add-day-btn" >Ajouter un jour</button>
          </div>
        </form>
      </div>
      {validationPostDay && (
        <div className="validationMsg">
          {validationMessagePostDay}
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
