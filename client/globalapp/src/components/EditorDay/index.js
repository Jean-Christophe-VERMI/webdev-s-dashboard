import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'moment';
import 'moment/locale/fr';

// Components
import Loading from '../Loading';
import EditorDayStyled from './EditorDayStyled';

// Containers
import InlineEdit from '../../containers/InlineEdit';


const EditorDay = ({
  editDay,
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
        saveDataText(day.text);
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
        <section>
          <div className="top-editor">
            <div className="date-jour">
              {Moment(oneDay.date).locale('fr').format("dddd, Do MMMM YYYY")}
            </div>
            <button 
              className="submit-btn" 
              variant="contained" 
              color="primary"
              type="submit"
              form="form-day"
              onClick={refreshPage}
              >
                Enregistrer
            </button>
          </div>
          <form id="form-day" onSubmit={handleSubmit}>
            <h4 className="title-textField">Notes du jour</h4>
              <div className="text-zone">
                <InlineEdit />
              </div>
          </form>
        </section>
      )}
    </EditorDayStyled>
  );
};

export default EditorDay;