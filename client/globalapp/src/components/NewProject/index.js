import React from 'react';
// import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import NewProjectStyled from './NewProjectStyled';

const NewProject = ({
  userId, 
  title, 
  description, 
  catégorie_type,
  onChange,
  fullstack,
  frontend,
  backend,
  sendProject,
  validationPostProject,
  hasErrorPostProject,
  errorMessagePostProject,
  validationMessagePostProject,
  clearErrorProject,
  clearValidationProject,
}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    sendProject();
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };
  
  if(errorMessagePostProject) {
    setTimeout(() => {
      clearErrorProject();
    }, 8000);
  }
  
  if(validationPostProject) {
    setTimeout(() => {
      clearValidationProject();
    }, 5000);
  }

  const id = userId;

  return (
  <NewProjectStyled>
    <div className="formulaire">
        <div className="headerForm">
          <h1 className="form-title">Nouveau projet</h1>
        </div>
        <form className="fieldForm" onSubmit={handleSubmit}>
          <TextField 
            name="title"
            onChange={handleChange}
            value={title}
            required
            id="field-title" 
            label="Nom du projet" 
            variant="filled" 
          />
          <TextField 
          name="description"
          onChange={handleChange}
          value={description}
          required
          id="filled-textarea"
          multiline
          rows={4}
          label="Description du projet"
          variant="filled" 
          />
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Catégorie</InputLabel>
            <Select
              name="catégorie_type"
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={catégorie_type} 
              onChange={handleChange}
              required
            >
              <MenuItem value="">
              </MenuItem>
              <MenuItem name="catégorie_type" value={catégorie_type} onChange={handleChange}>Fullstack</MenuItem>
              <MenuItem name="catégorie_type" value={catégorie_type} onChange={handleChange}>Back-end</MenuItem>
              <MenuItem name="catégorie_type" value={catégorie_type} onChange={handleChange}>Front-end</MenuItem>
              
            </Select>
          </FormControl>
            <div className="msgState">
              {hasErrorPostProject && !validationPostProject && (
                <div className="errorMsg">{errorMessagePostProject}</div>
              )}
              {validationPostProject && (
                <div className="validationMsg">{validationMessagePostProject}</div>
              )}
            </div>
            <Button 
              className="submit-btn" 
              variant="contained" 
              color="primary"
              type="submit"
            >
              Enregistrer
            </Button>
        </form>
    </div>
  </NewProjectStyled>

  );
};

export default NewProject;
