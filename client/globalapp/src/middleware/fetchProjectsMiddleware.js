import axios from 'axios';

import {
  FETCH_ALL_PROJECTS,
  saveProjects,
  FETCH_FILTRED_PROJECTS,
  userHasNoProject,
  errorMsgDashboard,
} from '../actions/dashboard';

const fetchProjectsMiddleware = (store) => (next) => (action) => {

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
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
  }
  
};

export default fetchProjectsMiddleware;