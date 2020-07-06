import axios from 'axios';

import {
  FETCH_ALL_PROJECTS,
  saveProjects,
  FETCH_FILTRED_PROJECTS,
  userHasNoProject,
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

import {
  ADD_NEW_DAY,
  validationPostDay,
  EDIT_DAY,
  validationEditDay,
} from '../actions/day';

const projectMiddleware = (store) => (next) => (action) => {

  const token = store.getState().dashboard.userToken;

  const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+token}
  });

  switch (action.type) {
    case FETCH_ALL_PROJECTS: {
      let userId = store.getState().main.userId;

      instance({
        method: 'get',
        url: `user/${userId}/projets`,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveProjects(response.data));
        })
        .catch((error) => {
          if (error.response) {

            console.log(error.response.data.error);
            store.dispatch(userHasNoProject());
            
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
      let projetId = store.getState().project.currentProjectId;

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
    case ADD_NEW_DAY: {
      let projetId = store.getState().project.currentProjectId;
      let projetTitle = store.getState().project.currentProjectTitle;

      axios({
        method: 'post',
        url: `http://localhost:4000/projets/${projetId}/${projetTitle}/nouveau-jour`,
        data: {
          date: store.getState().day.date,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(fetchAllProjects());
          store.dispatch(validationPostDay());
          
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.error);
          }
        });
      next(action);
      break;
    }
    case EDIT_DAY: {
      let projetId = store.getState().project.currentProjectId;
      let projetTitle = store.getState().project.currentProjectTitle;
      let dayId = store.getState().day.currentDay;

      axios({
        method: 'put',
        url: `http://localhost:4000/projets/${projetId}/${projetTitle}/jours/${dayId}/editer`,
        data: {
          text: store.getState().day.text,
          code: store.getState().day.code,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(fetchAllProjects());
          store.dispatch(validationEditDay());
          
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.error);
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