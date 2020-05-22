import axios from 'axios';

import {
  SEND_AUTH_INFOS,
  errorMsg,
  validationAuth,
  hasError,
} from '../actions/user';

const authMiddleware = store => next => action => {
  switch (action.type) {
    case SEND_AUTH_INFOS: {
      axios({
        method: 'post',
        url: 'http://localhost:3000/connexion',
        data: {
          email: store.getState().auth.email,
          password: store.getState().auth.password,
        },
      })
        .then(response => {
          console.log(response);
          store.dispatch(validationAuth());
        })
        .catch(error => {
          if (error.response) {

            console.log(error.response.data.error);
            const errorMessage = error.response.data.error;
            
            store.dispatch(hasError());
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