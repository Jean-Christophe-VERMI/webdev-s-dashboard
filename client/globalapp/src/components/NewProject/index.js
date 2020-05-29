import React from 'react';
// import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import NewProjectStyled from './NewProjectStyled';

const NewProject = ({
  userId, 
  title, 
  description, 
  catégorie_type,
  onChange,
  sendProject,
  validationPostProject,
  hasErrorPostProject,
  errorMessagePostProject,
  validationMessagePostProject,
  clearErrorProject,
  clearValidationProject,
}) => {

  
  const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  const [catégorie, setCatégorie] = React.useState('');

  catégorie_type = catégorie;
  console.log(catégorie_type);
  
  const [open, setOpen] = React.useState(false);

  const handleChangeSelected = (event) => {
    setCatégorie(event.target.value);
    onChange(event.target.value, event.target.name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
    }, 8000);
  }
  

  return (
  <NewProjectStyled>
    <div className="formulaire">
        <div className="headerForm">
          <h1 className="form-title">Nouveau projet</h1>
        </div>
        <form className="fieldForm" onSubmit={handleSubmit}>
          <div className="project-categorie">
            <div className="project-title">
              <TextField 
              name="title"
              onChange={handleChange}
              value={title}
              required
              id="field-title" 
              label="Nom du projet" 
              variant="filled" 
            />
            </div>
            <div className="categorie">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Catégorie</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={catégorie}
                  name="catégorie_type"
                  onChange={handleChangeSelected}
                  variant="filled"
                  required
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value='Fullstack' name="catégorie_type">Fullstack</MenuItem>
                  <MenuItem value='Back-end' name="catégorie_type">Back-end</MenuItem>
                  <MenuItem value='Front-end' name="catégorie_type">Front-End</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <TextField 
          name="description"
          onChange={handleChange}
          value={description}
          required
          id="filled-textarea"
          multiline
          rows={4}
          label="Description"
          variant="filled" 
          />
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
