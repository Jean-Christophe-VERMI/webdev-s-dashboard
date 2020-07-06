import axios from 'axios';

import {
  SEND_AUTH_INFOS,
  errorMsg,
  validationAuth,
  hasErrorAuth,
  addUserInfos,
  saveJwt,
} from '../actions/user';

import { 
  fetchAllProjects,
} from '../actions/dashboard';

const authMiddleware = store => next => action => {
  switch (action.type) {
    case SEND_AUTH_INFOS: {
      axios({
        method: 'post',
        url: 'http://localhost:4000/connexion',
        data: {
          email: store.getState().auth.email,
          password: store.getState().auth.password,
        },
      })
        .then(response => {
          console.log(response);
          const user = (response.data.userInfos[0]);
          const token = (response.data.token);
          store.dispatch(addUserInfos(user));
          store.dispatch(saveJwt(token));
          store.dispatch(validationAuth());
          store.dispatch(fetchAllProjects());
        })
        .catch(error => {
          if (error.response) {

            console.log(error.response.data.error);
            const errorMessage = error.response.data.error;
            
            store.dispatch(hasErrorAuth());
            store.dispatch(errorMsg(errorMessage));

           
          }
        });
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
      break;
  }
};

export default authMiddleware;