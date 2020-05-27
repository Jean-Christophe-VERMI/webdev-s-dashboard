import axios from 'axios';

import {
  SEND_USER,
  errorMsg,
  validationSignup,
  hasErrorRegister,
} from '../actions/user';

const registerMiddleware = store => next => action => {
  switch (action.type) {
    case SEND_USER: {
      axios({
        method: 'post',
        url: 'http://localhost:4000/inscription',
        data: {
          username: store.getState().registration.username,
          email: store.getState().registration.email,
          password: store.getState().registration.password,
          passwordConfirm: store.getState().registration.passwordConfirm,
        },
      })
        .then(response => {
          console.log(response);
          store.dispatch(validationSignup());
        })
        .catch(error => {
          if (error.response) {

            console.log(error.response.data.error);
            const errorMessage = error.response.data.error;
            
            store.dispatch(hasErrorRegister());
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

export default registerMiddleware;