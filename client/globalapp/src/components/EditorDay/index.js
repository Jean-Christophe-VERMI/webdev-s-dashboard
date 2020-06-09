import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Loading from '../Loading';
// import InlineEdit from '../InlineEdit';
import EditorDayStyled from './EditorDayStyled';

import InlineEdit from '../../containers/InlineEdit';


const EditorDay = ({
  onChange,
  editDay,
  // text,
  currentDay,
  currentProjectId,
  currentProjectTitle,
  saveDataText,
  textFromData,
  text,
}) => {

  const [oneDay, setDays] = useState(null);
  
  useEffect(() => {
    const getOneDay = async () => {
      try {
        const projetId = currentProjectId;
        const projetTitle = currentProjectTitle;
        const dayId = currentDay;
        const response = await axios.get(`http://localhost:4000/projets/${projetId}/${projetTitle}/jours/${dayId}`);
        const day = response.data;
        setDays(day);
        setStoredHeading(day.text);
        saveDataText(day.text);
      } catch (error) {
        console.log(error);
      }
    };
    getOneDay();

  }, [currentDay]);

  console.log(oneDay);

  const [textEdit, setStoredHeading] = useState("editer une note");
  

  console.log(textFromData);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    editDay();
  
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
            <div className="text-zone">
            {!textEdit && (
              <Loading />
            )}
            {textEdit && (
              <InlineEdit />
            )}
            </div>
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