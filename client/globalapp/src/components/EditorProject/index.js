import React from 'react';
// import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import EditorProjectStyled from './EditorProjectStyled';

const EditorProject = ({ 
  title, 
  description, 
  catégorie_type,
  catégorie_état,
  onChange,
  editProject,
  validationEditProject,
  hasErrorPostProject,
  errorMessagePostProject,
  validationMessageEditProject,
  clearErrorProject,
  clearValidationProject,
  userId,
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
  const [etat, setEtat] = React.useState('');

  catégorie_type = catégorie;
  console.log(catégorie_type);

  catégorie_état = etat;
  console.log(catégorie_état);
  
  const [openCategorie, setOpenCategorie] = React.useState(false);
  const [openEtat, setOpenEtat] = React.useState(false);

  const handleChangeSelectedCategorie = (event) => {
    setCatégorie(event.target.value);
    onChange(event.target.value, event.target.name);
  };

  const handleChangeSelectedEtat = (event) => {
    setEtat(event.target.value);
    onChange(event.target.value, event.target.name);
  };

  const handleCloseCategorie = () => {
    setOpenCategorie(false);
  };

  const handleOpenCategorie = () => {
    setOpenCategorie(true);
  };

  const handleCloseEtat = () => {
    setOpenEtat(false);
  };

  const handleOpenEtat = () => {
    setOpenEtat(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editProject();
  };

  const handleChange = (event) => {
    onChange(event.target.value, event.target.name);
  };
  
  if(errorMessagePostProject) {
    setTimeout(() => {
      clearErrorProject();
    }, 8000);
  }
  
  
  if(validationEditProject) {
    setTimeout(() => {
      clearValidationProject();
    }, 8000);
  }

  return (
    <EditorProjectStyled>
      <div className="formulaire">
        <div className="headerForm">
          <h1 className="form-title">Editer</h1>
        </div>
        <form className="fieldForm" onSubmit={handleSubmit}>
          <div className="project-categorie">
            <div id="categorie">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Catégorie</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openCategorie}
                  onClose={handleCloseCategorie}
                  onOpen={handleOpenCategorie}
                  value={catégorie}
                  name="catégorie_type"
                  onChange={handleChangeSelectedCategorie}
                  variant="filled"
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
            <div id="categorie">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Etat</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openEtat}
                  onClose={handleCloseEtat}
                  onOpen={handleOpenEtat}
                  value={etat}
                  name="catégorie_type"
                  onChange={handleChangeSelectedEtat}
                  variant="filled"
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value='En cours' name="catégorie_type">En cours</MenuItem>
                  <MenuItem value='Terminé' name="catégorie_type">Terminé</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="project-title">
              <TextField 
              name="title"
              onChange={handleChange}
              value={title}
              id="field-title" 
              label="Nom du projet" 
              variant="filled" 
            />
          </div>
          <TextField 
          name="description"
          onChange={handleChange}
          value={description}
          id="filled-textarea"
          multiline
          rows={4}
          label="Description"
          variant="filled" 
          />
          <div className="msgState">
            {hasErrorPostProject && !validationEditProject && (
              <div className="errorMsg">{errorMessagePostProject}</div>
            )}
            {validationEditProject && (
              <div className="validationMsg">{validationMessageEditProject}</div>
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
    </EditorProjectStyled>
    
  );
};

export default EditorProject;
