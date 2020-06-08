import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Loading from '../Loading';
import EditorDayStyled from './EditorDayStyled';


const EditorDay = ({
  onChange,
  editDay,
  text,
  currentDay,
  currentProjectId,
  currentProjectTitle,
}) => {

  const [oneDay, setDays] = useState(null);
  
  useEffect(() => {
    const getOneDay = async () => {
      try {
        const projetId = currentProjectId;
        const projetTitle = currentProjectTitle;
        const dayId = currentDay;
        const response = await axios.get(`http://localhost:4000/projets/${projetId}/${projetTitle}/jours/${dayId}`);
        const days = response.data;
        setDays(days);
    
      } catch (error) {
        console.log(error);
      }
    };
    getOneDay();

  }, [currentDay]);

  console.log(oneDay);

  const handleSubmit = (event) => {
    event.preventDefault();
    editDay();
  
  };

  const handleChangeText = (event) => {
    onChange(event.target.value, event.target.name);
  };

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload(false)
    }, 500);
  }

  return (
    <EditorDayStyled>
      {!oneDay && (
        <Loading />
      )}
      {oneDay && (
        <form className="form-day" onSubmit={handleSubmit}>
          <h4 className="title-textField">Notes du jour</h4>
            <div>
              {oneDay.text}
            </div>
            <TextareaAutosize 
            className="textField"
            aria-label="minimum height" 
            rowsMin={5} 
            onChange={handleChangeText}
            value={text}
            defaultValue={oneDay.text}
            defaultValue="Lorem ipsum"
            name="text"
          />
          <Button 
            className="submit-btn" 
            variant="contained" 
            color="primary"
            type="submit"
            onClick={refreshPage}
            >
              Enregistrer
          </Button>
        </form>
      )}
    </EditorDayStyled>
  );
};

export default EditorDay;