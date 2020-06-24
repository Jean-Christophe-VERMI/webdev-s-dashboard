import React, { useEffect, useRef } from 'react';

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

  
  const daysElements = useRef(null);
  useEffect(() => {
    daysElements.current.scrollTo(0, 0);
  }, []);
  

  if(validationPostDay) {
    setTimeout(() => {
      window.location.reload(false)
      clearValidationDay();
    }, 2000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewDay();
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };

  return (
    <DaysNavStyled >
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
            <button className="add-day-btn" type="submit"> Ajouter un jour </button>
          </div>
          {validationPostDay && (
            <div className="validationMsg">
              {validationMessagePostDay}
            </div>
          )}
        </form>
      </div>
      <div className="jours" ref={daysElements}>
        {data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ).map((day) => (
          <Day className="oneProject" key={day.id} {...day} />
        ))}
      </div>
    </DaysNavStyled>
  );
};

export default DaysNav;
