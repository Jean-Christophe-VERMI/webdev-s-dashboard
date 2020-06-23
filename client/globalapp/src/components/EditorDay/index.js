import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import Moment from 'moment';
import 'moment/locale/fr';
import { getUrlByProjectTitleEditerJour } from '../../selectors/index';

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
  saveDataCode,
  onChange,
  validationEditDay,
  clearValidationEditDay,
  code,
  validationMessageEditDay
}) => {

  const [oneDay, setDays] = useState(null);
  const [codeValue, setCodeValue] = useState(null);


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
        saveDataCode(day.code);
      } catch (error) {
        console.log(error);
      }
    };
    getOneDay();

  }, [currentDay]);

  console.log(oneDay);

  useEffect(() => {
    if(validationEditDay === true){
      window.location.reload();
      clearValidationEditDay();
      return <Redirect to={getUrlByProjectTitleEditerJour(currentProjectTitle, currentDay)} />;
    }
  }, [validationEditDay]);


  const handleSubmit = (event) => {
    event.preventDefault();
    editDay();
  };

  const handleChangeCode = (event) => {
    onChange(event.target.value, event.target.name);
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
              >
                Enregistrer
            </button>
          </div>
          <div className="main-editor">
            <form id="form-day" onSubmit={handleSubmit}>
              <h4 className="title-textField">Notes du jour</h4>
                <div className="text-zone">
                  <InlineEdit />
                </div>
            </form>
            <form id="form-day" onSubmit={handleSubmit}>
              <h4 className="title-textField">Code du jour</h4>
                <div className="code-zone">
                <Editor
                  value={code}
                  name="code"
                  onValueChange={code => setCodeValue({ code })}
                  onChange={handleChangeCode}
                  highlight={code => highlight(code, languages.js)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                  }}
                />
                </div>
            </form>
          </div>
        </section>
      )}
    </EditorDayStyled>
  );
};

export default EditorDay;