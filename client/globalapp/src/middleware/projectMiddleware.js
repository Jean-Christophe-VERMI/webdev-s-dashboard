import axios from 'axios';

import {
  FETCH_ALL_PROJECTS,
  saveProjects,
  FETCH_FILTRED_PROJECTS,
  userHasNoProject,
  errorMsgDashboard,
} from '../actions/dashboard';

import { 
  SEND_PROJECT, 
  EDIT_PROJECT,
  validationEditProject,
  validationPostProject,
  hasErrorPostProject,
  errorMsgPostProject,
} from '../actions/project';

import {
  fetchAllProjects,
} from '../actions/dashboard';

const projectMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_ALL_PROJECTS: {
      let userId = store.getState().main.userId;

      axios({
        method: 'get',
        url: `http://localhost:4000/user/${userId}/projets`,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveProjects(response.data));
        })
        .catch((error) => {
          if (error.response) {

            console.log(error.response.data.error);
            const errorMessageProject = error.response.data.error;
            
            store.dispatch(userHasNoProject());
            store.dispatch(errorMsgDashboard(errorMessageProject));
           
          }
        });
      next(action);
      break;
    }
    case FETCH_FILTRED_PROJECTS: {
      let userId = store.getState().main.userId;

      axios({
        method: 'get',
        url: `http://localhost:4000/user/${userId}/projets/search`,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveProjects(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_PROJECT: {
      let userId = store.getState().main.userId;

      axios({
        method: 'post',
        url: `http://localhost:4000/user/${userId}/projets/nouveau-projet`,
        data: {
          title: store.getState().project.title,
          description: store.getState().project.description,
          catégorie_type: store.getState().project.catégorie_type,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveProjects(response.data));
          store.dispatch(validationPostProject());
          store.dispatch(fetchAllProjects());
        })
        .catch((error) => {
          if (error.response) {

            console.log(error.response.data.error);
            const errorMessagePostProject = error.response.data.error;
            
            store.dispatch(hasErrorPostProject());
            store.dispatch(errorMsgPostProject(errorMessagePostProject));
           
          }
        });
      next(action);
      break;
    }
    case EDIT_PROJECT: {
      let projetId = store.getState().project.currentProject;

      axios({
        method: 'put',
        url: `http://localhost:4000/projets/${projetId}/editer`,
        data: {
          title: store.getState().project.title,
          description: store.getState().project.description,
          categorieType: store.getState().project.catégorie_type,
          categorieEtat: store.getState().project.catégorie_état,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveProjects(response.data));
          store.dispatch(validationEditProject());
          store.dispatch(fetchAllProjects());
        })
        .catch((error) => {
          if (error.response) {

            console.log(error.response.data.error);
            const errorMessagePostProject = error.response.data.error;
            
            store.dispatch(hasErrorPostProject());
            store.dispatch(errorMsgPostProject(errorMessagePostProject));
           
          }
        });
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
  }
  
};

export default projectMiddleware;